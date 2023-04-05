import customAxios from "./cumtomAxios";

const fetcher = (url: string) =>
  customAxios.get(url).then((response) => response.data);

export default fetcher;
