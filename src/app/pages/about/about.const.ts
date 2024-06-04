import { ICvButtons, ISocialIcons } from './about.interface';

export const SOCIAL_ICONS: ISocialIcons[] = [
  {
    buttonProps: {
      showIcon: true,
    },
    iconProps: {
      iconName: 'Github',
    },
  },
  {
    buttonProps: {
      showIcon: true,
    },
    iconProps: {
      iconName: 'Linkedin',
    },
  },
  {
    buttonProps: {
      showIcon: true,
    },
    iconProps: {
      iconName: 'Dribbble',
    },
  },
  {
    buttonProps: {
      showIcon: true,
      isHref: true,
      href: 'mailto:lucianesantcs@gmail.com',
    },
    iconProps: {
      iconName: 'Mail',
    },
  },
];

export const CV_BUTTONS: ICvButtons = {
  buttonProps: {
    showIcon: true,
    showLabel: true,
    label: 'Download CV',
    isHref: true,
    href: 'assets/docs/curriculo-lucianesantos.pdf',
    style: 'outline-default-32'
  },
  iconProps: {
    iconName: 'Download',
  },
};
