# Part_2

## 1.Aperçu du projet

</br>

Le synopsis du projet consiste à recevoir le nom de la playlist de l'utilisateur, à utiliser l'API Spotify pour récupérer les informations de cette playlist. Pour cela, il est nécessaire de récupérer access token en utilisant le client_id et le client_secret émis par Spotify, et d'envoyer une requête API en utilisant access token. Les informations reçues sont utilisées pour afficher la liste des playlists à l'utilisateur, entre autres fonctionnalités.

</br>
</br>

## 2.Configuration du fichier env

### Emplacement du fichier env

Il est situé à la racine du projet.

### Exemple de configuration de fichier env

</br>

.env

```env


REACT_APP_CLIENT_ID="client_id"
REACT_APP_CLIENT_SECRET="client_secret"
```

</br>
</br>

## 3.Comment exécuter

```zsh
$> npm run start
Compiled successfully!

You can now view my-project in the browser.

Local:            http://localhost:3000
On Your Network:  ...

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
No issues found.
```

</br>
</br>

## 4.File tree

```js
.
├── App.tsx
|
├── components
│   ├── Detail
│   │   ├── Background.tsx
│   │   ├── HamburgerButton.tsx
│   │   ├── PlaylistInfo.tsx
│   │   └── Songs.tsx
│   └── Home
│       ├── Background.tsx
│       ├── Header.tsx
│       ├── Playlist.tsx
│       ├── Playlists.tsx
│       └── SearchBox.tsx
|
├── hooks
│   ├── useInput.ts
│   └── useSearchPlaylists.ts   // Type de data de l'API    (extraction de type à l'aide de json-to-typescript)
|
├── index.tsx
|
├── interfaces
│   └── playlist.ts
|
├── lib                         // Configuration de fetcher pour useSWR (configuration de l'accès token et création de fetcher)
│   ├── cumtomAxios.ts
│   ├── fetcher.ts
│   └── setAccessToken.ts
|
├── pages
│   ├── Detail.tsx
│   └── Home.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts
|
└── styles
    ├── datail
    │   ├── artist-name.scss
    │   ├── artwork.scss
    │   ├── background.scss
    │   ├── download.scss
    │   ├── follow-button.scss
    │   ├── play-button.scss
    │   ├── play-info.scss
    │   └── songs.scss
    ├── home
    │   ├── header.scss
    │   ├── home.scss
    │   ├── playlist.scss
    │   ├── playlists.scss
    │   └── searchBox.scss
    ├── reset.scss
    └── variables.scss
```

</br>
</br>

## 5.Axios interceptor

L'intercepteur Axios est l'une des fonctionnalités fournies par la bibliothèque Axios qui permet d'intercepter les requêtes API avant de les envoyer et d'ajouter des actions souhaitées. Ainsi, avant d'envoyer une requête axios, l'intercepteur vérifie si l'access token existe dans les cookies, puis l'ajoute à l'en-tête de la requête axios. S'il n'y a pas de access token dans les cookies, il le demande à l'API, le stocke dans un cookie, puis l'ajoute au header avant d'envoyer la requête API.

</br>

#### setAccessToken.ts

```js
const setAccessToken = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  const accesssTokenFromCookies = Cookies.get("access_token");

  // Si l'access token n'est pas présent dans le cookie, une demande de access token est envoyée.
  if (!accesssTokenFromCookies) {
    const { access_token, expires_in } = await refresh();
    const expiresDate = new Date();
    expiresDate.setSeconds(expiresDate.getSeconds() + expires_in - 10);
    Cookies.set("access_token", access_token, {
      expires: expiresDate,
    });
    Cookies.set("expires_in", expires_in, {
      expires: expiresDate,
    });
    // La fonction est appelée de nouveau récursivement.
    return setAccessToken(config);
  }

  // Ajoutez un access token et un type de contenu au header.
  config.headers.Authorization = `Bearer ${accesssTokenFromCookies}`;
  config.headers["Content-Type"] = "application/json";
  return config;
};
```

</br>

#### costomAxios.ts

```js
const customAxios = axios.create({});

customAxios.interceptors.request.use(setAccessToken);
```

</br>

#### fetcher.ts

```js
const fetcher = (url: string) =>
  customAxios.get(url).then((response) => response.data);

export default fetcher;
```

Ce fetcher est utilisé comme fetcher pour useSWR.

</br>
</br>

## 6.useSWR

### Pourquoi useSWR

En gérant l'accès token et les données de la playlist globalement, on peut éviter le passage de props entre composants. Pour cela, il existe des méthodes telles que redux, redux-thunk, redux-saga, useSWR, etc. useSWR est facile à utiliser et son code est intuitif. De plus, il ne fait qu'une seule requête, ce qui permet de l'utiliser même si les composants sont imbriqués.

</br>

> https://swr.vercel.app/ko/docs/getting-started#%EC%9E%AC%EC%82%AC%EC%9A%A9-%EA%B0%80%EB%8A%A5%ED%95%98%EA%B2%8C-%EB%A7%8C%EB%93%A4%EA%B8%B0

</br>
En revanche, useSWR met automatiquement à jour les données. Pour supprimer cette fonctionnalité, effectuer les paramétres suivants.

</br>

```js
useSWR(key, fetcher, {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
});
```

Cependant, avoir configuré les paramètres suivants équivaut à utiliser useSWRImmutable.

```js
useSWRImmutable(key, fetcher);
```

</br>
Le fetcher créé précédemment est configuré globalement dans SWR.

```js
function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist/:playlistName" element={<Detail />} />
      </Routes>
    </SWRConfig>
  );
}
```

</br>
</br>

## 7. useSWRInfinite

La fonction useSearchPlaylists utilise le hook useSWRInfinite pour implémenter le défilement infini de pagination.

```js
/* key generateur pour une clé unique pour chaque page afin d'implémenter une pagination infinie avec SWR. */
const getKey = (
  pageIndex: number,
  previousPageData: any,
  searchValue: string
) => {
  if (
    (previousPageData && !previousPageData.playlists.next) ||
    searchValue === ""
  )
    return null;

  const offset = pageIndex * PAGE_SIZE;
  return `https://api.spotify.com/v1/search?q=${searchValue}&type=playlist&offset=${offset}&limit=${PAGE_SIZE}`;
};

/* La fonction useSearchPlaylists utilise le hook useSWRInfinite pour implémenter le défilement infini de pagination. */
const useSearchPlaylists = (searchValue: string) => {
  const { data, isLoading, error, setSize, size } = useSWRInfinite(
    (pageIndex, previousPageData) =>
      getKey(pageIndex, previousPageData, searchValue)
  );

  const playlists = data ? data.flatMap((page) => page.playlists.items) : [];
  const total = data ? data[0].playlists.total : 0;
  return { playlists, total, isLoading, isError: error, setSize, size };
};
```
