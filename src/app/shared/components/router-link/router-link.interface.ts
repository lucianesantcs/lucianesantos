import { IIcon } from '../icon/icon.interface';

export interface IRouterLink {
  routerLink: string;
  routerLinkLabel: string;
  showIcon?: boolean;
  iconProps?: IIcon;
}
