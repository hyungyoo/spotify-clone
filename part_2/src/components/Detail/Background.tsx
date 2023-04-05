import "../../styles/datail/background.scss";

export const Background = (props: React.PropsWithChildren) => {
  return (
    <div className="bg">
      <div className="edit">{props.children}</div>
      <div className="bg__group"></div>
      <div className="bg__artwork-copy"></div>
      <div className="bg__gradient-fill"></div>
    </div>
  );
};
