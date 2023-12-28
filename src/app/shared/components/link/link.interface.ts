import { IIcon } from '../icon/icon.interface';

export interface ILink {
  routerLink: string;
  routerLinkLabel: string;
  showIcon?: boolean;
  iconProps?: IIcon;
}
