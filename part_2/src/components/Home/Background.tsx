import "../../styles/home/home.scss";

export const HomeBackground = (props: React.PropsWithChildren) => {
  return <div className="home">{props.children}</div>;
};
