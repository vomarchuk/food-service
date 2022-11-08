export const Image = ({ src, alt, width }) => {
  return (
    <img
      src={src.x1}
      alt={alt}
      width={width}
      srcSet={`${src.x1} 1x, ${src.x2} 2x`}
    />
  );
};
