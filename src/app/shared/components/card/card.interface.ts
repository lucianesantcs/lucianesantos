import { IButton } from '../button/button.interface';

export interface ICardProps {
  title: string;
  description: string;
  image: string;
  buttonProps: {
    primary: IButton;
    secondary: IButton;
  };
}
