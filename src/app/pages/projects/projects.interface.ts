import { ICardProps } from '../../shared/components/card/card.interface';
import { IIcon } from '../../shared/components/icon/icon.interface';
import { ILink } from '../../shared/components/link/link.interface';

export interface IProjects {
  main: ICardProps[];
  others: ICardProps[];
}

export interface ILinkOptions {
  link: ILink;
  iconProps: IIcon;
  changeProjectType: 'main' | 'others';
}
