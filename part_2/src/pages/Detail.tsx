import { useLocation } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { PlaylistInfo } from "../components/Detail/PlaylistInfo";
import { Songs } from "../components/Detail/Songs";
import { DetailBackground } from "../components/Detail/Background";

export const Detail = () => {
  const location = useLocation();
  const apiEndpoint = location.state?.apiEndpoint;
  const { isLoading, error } = useSWRImmutable(apiEndpoint);

  if (isLoading) return <DetailBackground>Loading...</DetailBackground>;
  if (error) return <DetailBackground>Error...</DetailBackground>;
  return (
    <DetailBackground>
      <PlaylistInfo apiEndpoint={apiEndpoint} />
      <Songs apiEndpoint={apiEndpoint} />
    </DetailBackground>
  );
};
