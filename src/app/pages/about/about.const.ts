import { ICvButtons, ISocialIcons } from './about.interface';

export const SOCIAL_ICONS: ISocialIcons[] = [
  {
    buttonProps: {
      showIcon: true,
      isHref: true,
      name: 'Github',
      href: 'https://github.com/lucianesantcs',
    },
    iconProps: {
      iconName: 'Github',
    },
  },
  {
    buttonProps: {
      showIcon: true,
      isHref: true,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lucianesantcs/',
    },
    iconProps: {
      iconName: 'Linkedin',
    },
  },
  {
    buttonProps: {
      showIcon: true,
      isHref: true,
      name: 'Dribbble',
      href: 'https://dribbble.com/lucianesantos',
    },
    iconProps: {
      iconName: 'Dribbble',
    },
  },
  {
    buttonProps: {
      showIcon: true,
      isHref: true,
      name: 'E-mail',
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
    name: 'Download Currículo',
    href: 'assets/docs/curriculo-lucianesantos.pdf',
    style: 'outline-default-32'
  },
  iconProps: {
    iconName: 'Download',
  },
};
