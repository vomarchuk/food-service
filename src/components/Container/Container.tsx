import style from './Container.module.scss';

export const Container = ({
  children,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return <div className={style.container}>{children}</div>;
};
