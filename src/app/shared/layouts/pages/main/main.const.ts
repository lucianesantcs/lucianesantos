import { ILink } from '../../../components/link/link.interface';
import { IRouterLink } from '../../../components/router-link/router-link.interface';
import { IToggleIconProps } from '../../../components/toggle-icon/toggle-icon.interface';

export const NAV_LINKS: IRouterLink[] = [
  {
    routerLink: '/about',
    routerLinkLabel: 'Sobre',
  },
  {
    routerLink: '/experience',
    routerLinkLabel: 'Experiência',
  },
  {
    routerLink: '/projects',
    routerLinkLabel: 'Projetos',
    // TODO: IMPLEMENTAR DEPOIS
    // isCollapsible: true,
    // showIcon: true,
    // iconProps: {
    //   iconName: 'ChevronDown',
    // },
  },
  {
    routerLink: '/contact',
    routerLinkLabel: 'Contato',
  },
];

export const DROPDOWN_LINKS: ILink[] = [
  {
    name: 'Todos',
    key: 'all',
    active: true,
  },
  {
    name: 'Meus códigos',
    key: 'my-codes',
    active: false,
  },
  {
    name: 'Angular',
    key: 'angular',
    active: false,
  },
  {
    name: 'React JS/TS',
    key: 'react',
    active: false,
  },
  {
    name: 'HTML & CSS/SCC',
    key: 'html-css',
    active: false,
  },
  {
    name: 'JavaScript/TS',
    key: 'javascript',
    active: false,
  },
  {
    name: 'Frontend',
    key: 'frontend',
    active: false,
  },
  {
    name: 'Backend',
    key: 'backend',
    active: false,
  },
  {
    name: 'Layouts',
    key: 'layouts',
    active: false,
  },
  {
    name: 'Contribuição',
    key: 'contribution',
    active: false,
  },
];

export const TOGGLE_ICONS: IToggleIconProps[] = [
  {
    buttonProps: {
      overlineLabel: 'EN',
      showIcon: true,
    },
    iconProps: {
      iconName: 'Languages',
      iconSize: 16,
    },
  },
  {
    buttonProps: {
      showIcon: true,
    },
    iconProps: {
      iconName: 'Moon',
      iconSize: 16,
    },
  },
];
