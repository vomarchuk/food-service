import style from './Container.module.scss';

export const Container = ({ children }: any) => {
  return <div className={style.container}>{children}</div>;
};
