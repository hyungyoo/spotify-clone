import axios, { InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import base64 from "base-64";

/**
 * Request an access token to Spotify.
 * Using the client ID and client secret,
 * send a request to https://accounts.spotify.com/api/token
 * and receive an access token and expires_in.
 * @returns access_token, expires_in
 */
const refresh = async () => {
  const url = `https://accounts.spotify.com/api/token`;
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
  const credentials = `${clientId}:${clientSecret}`;
  const {
    data: { access_token, expires_in },
  } = await axios.post(
    url,
    {
      grant_type: "client_credentials",
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + base64.encode(credentials),
      },
    }
  );
  return { access_token, expires_in };
};

/**
 * axios interceptor:
 * Retrieves the access token from cookies.
 * If there is an access token in the cookie,
 * it adds it to the request header.
 * If there is no access token in the cookie,
 * it recursively calls a function to get a new access token,
 * adds it to the header, and returns to the original function to retry the request.
 * @param config InternalAxiosRequestConfig
 * @returns Promise<InternalAxiosRequestConfig>
 */
const setAccessToken = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  const accesssTokenFromCookies = Cookies.get("access_token");

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
    return setAccessToken(config);
  }

  config.headers.Authorization = `Bearer ${accesssTokenFromCookies}`;
  config.headers["Content-Type"] = "application/json";
  return config;
};

export default setAccessToken;
