# Spotify

</br>

## 1. Aperçu du projet

Ce projet est une application web modularisée mise en œuvre à l'aide de la méthodologie BEM et de Gulp.
Il a été développé en HTML et CSS uniquement, sans JavaScript.
De plus, il est mis en œuvre pour ajuster automatiquement la taille de police en fonction de la taille de l'écran à l'aide de requêtes de média.
Les autres éléments sont redimensionnés en fonction d'une base de largeur en view port.

</br>

</br>

## 2. Comment exécuter

</br>

Pour exécuter ce projet, installez les modules nécessaires en utilisant la commande npm i. Ensuite, compilez les fichiers SCSS en utilisant la commande gulp.

```zsh
$> npm i
$> gulp
[16:50:46] Using gulpfile ~/spotify-clone/part_1/gulpfile.js
[16:50:46] Starting 'default'...
[16:50:46] Starting 'watch'...

```

</br>
Ou exécutez la commande "make all" pour lancer le projet.

```zsh
$> make all
[16:50:46] Using gulpfile ~/spotify-clone/part_1/gulpfile.js
[16:50:46] Starting 'default'...
[16:50:46] Starting 'watch'...

```

</br>
</br>

## Méthodologie BEM

Dans ce projet, la méthodologie BEM (Bloc Element Modifier) a été utilisée pour implémenter CSS.
La méthodologie BEM fournit des règles pour spécifier les noms de classe CSS afin d'améliorer la maintenabilité et la modularité.
Cette méthodologie utilise des noms de classe pour décrire les blocs, les éléments et les modificateurs.

```html
<div class="download">
  <div class="download__text">Download</div>
  <div class="download__button">
    <input type="checkbox" id="download-check" />
    <label for="download-check" class="download__button--toggle"></label>
  </div>
</div>
```

</br>
</br>

## GULP et SCSS

SCSS est un préprocesseur CSS qui fournit des fonctionnalités telles que les variables, les fonctions et les structures imbriquées pour faciliter la rédaction du code CSS. De plus, il prend en charge la modularité pour augmenter la réutilisabilité du code.
De plus, dans ce projet, les fichiers SCSS sont compilés en fichiers CSS à l'aide de Gulp. Gulp est un outil de construction qui permet de configurer des flux de travail automatisés.
Il est possible de compiler les fichiers SCSS en fichiers CSS et de créer une version optimisée en comprimant les fichiers CSS avec Gulp.

</br>
</br>

## Images de résultat

</br>

### Image de maquette

</br>
<img src="https://user-images.githubusercontent.com/71254925/229837723-1ba3397c-05d2-4a6d-b715-f71c2416136d.png" alt="Spotify Mockup" width="300" >

</br>
</br>

### Image implémentée

</br>
<img src="https://user-images.githubusercontent.com/71254925/229900218-5f221293-5679-477f-af4c-654479273622.png" alt="Spotify Mockup" width="300" >
