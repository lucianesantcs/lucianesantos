import { IIcon } from '../icon/icon.interface';

export interface IRouterLink {
  routerLink: string;
  routerLinkLabel: string;
  isCollapsible?: boolean;
  showIcon?: boolean;
  iconProps?: IIcon;
}
