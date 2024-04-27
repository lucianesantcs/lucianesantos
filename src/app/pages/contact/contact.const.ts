import { ISocialIcons } from './contact.interface';

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
      href:'mailto:lucianesantcs@gmail.com',
    },
    iconProps: {
      iconName: 'Mail',
    },
  },
];
