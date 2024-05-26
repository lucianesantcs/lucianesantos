import { IIcon } from '../icon/icon.interface';

export interface ILink {
  name: string;
  key: string;
  active: boolean;
  default18Font?: boolean;
  showIcon?: boolean;
  iconProps?: IIcon;
}
