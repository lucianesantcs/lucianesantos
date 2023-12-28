import { IIcon } from '../icon/icon.interface';

export interface IButton {
  routerLink: string;
  routerLinkLabel: string;
  showIcon?: boolean;
  iconProps?: IIcon;
}
