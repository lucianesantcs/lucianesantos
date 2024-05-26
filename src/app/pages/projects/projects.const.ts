import { IProjects } from './projects.interface';

export const CARD_PROPS: IProjects = {
  main: [
    {
      title: 'site profissional',
      description:
        'Versão atual do site pessoal desenvolvido com Angular 17+, design criado utilizando Figma',
      image: 'assets/images/projects/site.png',
      tags: ['#angular', '#typescript', '#sass', '#rxjs', 'figma', '#pessoal'],
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
      tags: ['#vitejs', '#typescript', '#sass', '#challenges', '#pessoal'],
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
      tags: ['#figma', '#design', '#pessoal'],
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
      description: 'App de Countdown desenvolvido com vanilla javascript',
      image: 'assets/images/projects/counter.png',
      tags: ['#flexbox', '#javascript', '#font-end', '#pessoal', '#challenges'],
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
  ],
  others: [
    {
      title: 'proffy',
      description: 'Aplicação que conecta alunos e professores',
      image: 'assets/images/projects/proffy.png',
      tags: [
        '#javascript',
        '#nodejs',
        '#reactjs',
        '#font-end',
        '#back-end',
        '#sqlite',
        '#react-native',
        '#typescript',
        '#express',
        '#contributed',
        '#responsive',
      ],
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
      title: 'be the hero',
      description:
        'Aplicação que conecta ONGs a pessoas que estão dispostas a ajudá-los monetariamente nos casos',
      image: 'assets/images/projects/be-the-hero.png',
      tags: [
        '#javascript',
        '#nodejs',
        '#reactjs',
        '#font-end',
        ' #back-end',
        '#sqlite',
        '#react-native',
        ' #express',
        '#contributed',
        ' #responsive',
      ],
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
      title: 'animais fantásticos',
      description:
        'Site desenvolvido no curso de JavaScript ES6+ completo pela Origamid',
      image: 'assets/images/projects/animais-fantasticos.png',
      tags: [
        '#javascript',
        '#nodejs',
        '#webpack',
        '#eslint',
        '#babel',
        '#font-end',
        '#contributed',
      ],
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
  ],
};
