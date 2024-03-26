import { IButton } from '../../shared/components/button/button.interface';
import { IIcon } from '../../shared/components/icon/icon.interface';

export interface ISocialIcons {
  buttonProps: IButton;
  iconProps: IIcon;
}

export interface ISocialLinksMapper {
  Github: string;
  Linkedin: string;
  Dribbble: string;
}
