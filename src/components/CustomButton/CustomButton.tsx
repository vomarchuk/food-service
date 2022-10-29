import { Button } from '@mui/material';

interface IButton {
  text: string;
  style: {
    [key: string]: string | { [key: string]: string };
  };
  onClick?: (event: MouseEvent) => void;
}

export const CustomButton = ({ text, style, onClick }: IButton) => {
  console.log(onClick);

  return (
    <Button variant="contained" sx={style}>
      {text}
    </Button>
  );
};
