import { IButton } from '../button/button.interface';
import { IImageProps } from '../image-dialog/image-dialog.interface';

export interface ICardProps extends IImageProps {
  buttonProps: {
    primary: IButton;
    secondary?: IButton;
  };
}
