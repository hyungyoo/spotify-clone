import axios, { InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import base64 from "base-64";

/**
 * 스포티파이에 접근토큰을 요청함
 * client id와 client secret를 이용하여,
 * https://accounts.spotify.com/api/token에 요청을 보내 접근토큰과 expires_in을 반환받음
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
 * axios 인터셉터
 * 쿠키에서 접근토큰을 조회후,
 * 쿠키에 접근토큰이있다면, 헤더에 추가하여 요청 
 * 없다면 새로발급받아, 다시 재귀하여 함수로 복귀하여 쿠키를 통해 토큰을 얻은후 헤더에 추가
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
