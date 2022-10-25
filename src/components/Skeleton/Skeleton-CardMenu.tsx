import { Grid, Skeleton } from '@mui/material';
export const SkeletonCardMenu = () => (
  <Skeleton
    sx={styles.forSkeleton}
    variant="rectangular"
    animation="wave"
    width="158px"
    height="175px"
  />
);

const styles = {
  forSkeleton: {
    borderRadius: '5px',
  },
};
