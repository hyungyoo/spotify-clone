import { useLocation } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { Background } from "../components/Detail/Background";
import { PlaylistInfo } from "../components/Detail/PlaylistInfo";
import { Songs } from "../components/Detail/Songs";

export const Detail = () => {
  const location = useLocation();
  const apiEndpoint = location.state?.apiEndpoint;
  const { isLoading, error } = useSWRImmutable(apiEndpoint);

  if (isLoading) return <Background>Loading...</Background>;
  if (error) return <Background>Error...</Background>;
  return (
    <Background>
      <PlaylistInfo apiEndpoint={apiEndpoint} />
      <Songs apiEndpoint={apiEndpoint} />
    </Background>
  );
};
