import { Button } from '@mui/material';

interface IButton {
  text: string;
  style: {
    [key: string]: string | { [key: string]: string };
  };
}

export const CustomButton = ({ text, style }: IButton) => {
  return (
    <Button variant="contained" sx={style}>
      {text}
    </Button>
  );
};
