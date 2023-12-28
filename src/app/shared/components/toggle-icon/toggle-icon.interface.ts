import { IButton } from '../button/button.interface';
import { IIcon } from '../icon/icon.interface';

export interface IToggleIconProps {
  iconProps?: IIcon;
  buttonProps?: IButton;
  showIcon?: boolean;
}
