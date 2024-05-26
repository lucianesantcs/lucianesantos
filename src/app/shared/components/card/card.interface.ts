import { IButton } from '../button/button.interface';

export interface ICardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  buttonProps: {
    primary: IButton;
    secondary: IButton;
  };
}
