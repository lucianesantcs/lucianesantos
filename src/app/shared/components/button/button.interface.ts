import { IIcon } from '../icon/icon.interface';

export interface IButton {
  showIcon?: boolean;
  showLabel?: boolean;
  iconProps?: IIcon;
  label?: string;
  overlineLabel?: string;
}
