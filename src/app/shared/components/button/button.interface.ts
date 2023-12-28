import { IconType } from "../icon/icon.type";

export interface IButtonIconProps {
  iconName: IconType;
  iconSize: number;
}

export interface IButton {
  routerLink: string;
  routerLinkLabel: string;
  showIcon?: boolean;
  iconProps?: IButtonIconProps;
}