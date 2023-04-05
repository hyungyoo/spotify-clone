import { useLocation } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { Background } from "../components/Detail/Background";
import { PlaylistInfo } from "../components/Detail/PlaylistInfo";
import { Songs } from "../components/Detail/Songs";

export const Detail = () => {
  const location = useLocation();
  const apiEndpoint = location.state?.apiEndpoint;
  const { isLoading, error } = useSWRImmutable(apiEndpoint);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <Background>
      <PlaylistInfo apiEndpoint={apiEndpoint} />
      <Songs apiEndpoint={apiEndpoint} />
    </Background>
  );
};
