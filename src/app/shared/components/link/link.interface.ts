import { IconType } from '../icon/icon.type';

export interface ILinkIconProps {
  iconName: IconType;
}

export interface ILink {
  routerLink: string;
  routerLinkLabel: string;
  showIcon?: boolean;
  iconProps?: ILinkIconProps;
}
