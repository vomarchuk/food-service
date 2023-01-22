import CircleLoader from 'react-spinners/CircleLoader';
import { colors } from 'constants';

export const IsLoading = () => (
  <CircleLoader
    color={colors.ACTIVE_ACCENT_COLOR}
    loading={true}
    cssOverride={{ margin: '100px 0px' }}
    size={100}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
);
