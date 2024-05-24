import { ICardProps } from '../../shared/components/card/card.interface';

export const CARD_PROPS: ICardProps[] = [
  {
    title: 'site profissional',
    description:
      'Versão atual do site pessoal desenvolvido com Angular 17+',
    image: 'assets/images/projects/site.png',
    buttonProps: {
      primary: {
        overlineLabel: 'código',
        isHref: true,
        href: 'https://github.com/lucianesantcs/site-pessoal',
      },
      secondary: {
        overlineLabel: 'layout',
        isHref: true,
        href: 'https://www.figma.com/design/sK8Rcd2lf0WDyLe2HDHQ4m/pessoal-%2F-site?node-id=0-1',
      },
    },
  },
  {
    title: 'blog-cards',
    description:
      'Blog preview Card com filtro por input, desenvolvido com typeScript e sass',
    image: 'assets/images/projects/blog-cards.png',
    buttonProps: {
      primary: {
        overlineLabel: 'código',
        isHref: true,
        href: 'https://github.com/lucianesantcs/blog-cards',
      },
      secondary: {
        overlineLabel: 'pré-visualização',
        isHref: true,
        href: 'https://lucianesantcs.github.io/blog-cards/',
      },
    },
  },
  {
    title: 'sing up modal',
    description:
      'Design de um modal cadastrar newsletter de uma livraria online',
    image: 'assets/images/projects/online-library.png',
    buttonProps: {
      primary: {
        overlineLabel: 'pré-visualização',
        isHref: true,
        href: 'https://dribbble.com/shots/14189122-Online-Library-Modal',
      },
      secondary: {
        overlineLabel: 'layout',
        isHref: true,
        href: 'https://www.figma.com/file/CGZvEtvbSiMTJ3wlJA41wR/online-library-modal',
      },
    },
  },
  {
    title: 'countdown app',
    description:
      'App de Countdown desenvolvido com vanilla javascript',
    image: 'assets/images/projects/counter.png',
    buttonProps: {
      primary: {
        overlineLabel: 'código',
        isHref: true,
        href: 'https://github.com/lucianesantcs/contador',
      },
      secondary: {
        overlineLabel: 'pré-visualização',
        isHref: true,
        href: 'https://lucianesantcs.github.io/contador/',
      },
    },
  },
];
