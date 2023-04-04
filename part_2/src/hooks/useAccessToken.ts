// import axios from "axios";
// import { useEffect, useState } from "react";
// import base64 from "base-64";

// // https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/

const useAccessToken = () => {
  //   const url = `https://accounts.spotify.com/api/token`;
  //   const clientId = process.env.REACT_APP_CLIENT_ID;
  //   const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
  //   const credentials = `${clientId}:${clientSecret}`;
  //   const [accessToken, setAccessToken] = useState("");
  //   const [expiresIn, setExpiresIn] = useState("");
  //   useEffect(() => {
  //     axios
  //       .post(
  //         url,
  //         {
  //           grant_type: "client_credentials",
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/x-www-form-urlencoded",
  //             Authorization: "Basic " + base64.encode(credentials),
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //         setAccessToken(res.data.access_token);
  //         setExpiresIn(res.data.expires_in);
  //       });
  //   }, []);
  //   return accessToken;
};

export default useAccessToken;
