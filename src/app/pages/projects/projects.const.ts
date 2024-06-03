import { IProjects } from './projects.interface';

export const CARD_PROPS: IProjects = {
  main: [
    {
      title: 'site profissional',
      description:
        'Versão atual do site pessoal desenvolvido com Angular 17+, design criado utilizando Figma',
      image: 'assets/images/projects/site.png',
      fullImage: 'assets/images/projects/site-full.png',
      tags: [
        '#angular',
        '#typescript',
        '#sass',
        '#rxjs',
        'figma',
        '#pessoal',
        '#font-end',
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
      title: 'proffy',
      description: 'Aplicação que conecta alunos e professores',
      image: 'assets/images/projects/proffy.png',
      fullImage: 'assets/images/projects/proffy-full.png',
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
          href: 'https://github.com/lucianesantcs/proffy/',
        },
      },
    },
    {
      title: 'blog-cards',
      description:
        'Blog preview Card com filtro por input, desenvolvido com typeScript e sass',
      image: 'assets/images/projects/blog-cards.png',
      fullImage: 'assets/images/projects/blog-cards-full.png',
      tags: [
        '#vitejs',
        '#typescript',
        '#sass',
        '#challenges',
        '#pessoal',
        '#font-end',
      ],
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
      title: 'buy-it',
      description:
        'Design da página inicial de uma loja de variedade de produtos online',
      image: 'assets/images/projects/buy-it.png',
      fullImage: 'assets/images/projects/buy-it-full.png',
      tags: ['#figma', '#design', '#pessoal'],
      buttonProps: {
        primary: {
          overlineLabel: 'pré-visualização',
          isHref: true,
          href: 'https://dribbble.com/shots/24272916-buy-it-home-page',
        },
        secondary: {
          overlineLabel: 'layout',
          isHref: true,
          href: 'https://www.figma.com/design/AfUQbKpjFLUqoadJxxUU2y/pessoal-%2F-designs?node-id=1-43',
        },
      },
    },
    {
      title: 'dekan landing page',
      description: 'Design de uma landing page completa desenhada no figma',
      image: 'assets/images/projects/dekan-landing-page.png',
      fullImage: 'assets/images/projects/dekan-landing-page-full.png',
      tags: ['#figma', '#design', '#pessoal'],
      buttonProps: {
        primary: {
          overlineLabel: 'pré-visualização',
          isHref: true,
          href: 'https://dribbble.com/shots/24272930-dekan-landing-page',
        },
        secondary: {
          overlineLabel: 'layout',
          isHref: true,
          href: 'https://www.figma.com/design/AfUQbKpjFLUqoadJxxUU2y/pessoal-%2F-designs?node-id=5-39',
        },
      },
    },
    {
      title: 'sing up modal',
      description:
        'Design de um modal cadastrar newsletter de uma livraria online',
      image: 'assets/images/projects/online-library.png',
      fullImage: 'assets/images/projects/online-library-full.png',
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
          href: 'https://www.figma.com/design/AfUQbKpjFLUqoadJxxUU2y/pessoal-%2F-designs?node-id=7-759',
        },
      },
    },
    {
      title: 'be the hero',
      description:
        'Aplicação que conecta ONGs a pessoas que estão dispostas a ajudá-los monetariamente nos casos',
      image: 'assets/images/projects/be-the-hero.png',
      fullImage: 'assets/images/projects/be-the-hero-full.png',
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
          href: 'https://github.com/lucianesantcs/be-the-hero/',
        },
      },
    },
    {
      title: 'countdown app',
      description: 'App de Countdown desenvolvido com vanilla javascript',
      image: 'assets/images/projects/counter.png',
      fullImage: 'assets/images/projects/counter-full.png',
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
      title: 'portfólio (2021)',
      description:
        'Portfólio criado em 2021 desenvolvido em ReactJS com css module',
      image: 'assets/images/projects/portfolio.png',
      fullImage: 'assets/images/projects/portfolio-full.png',
      tags: ['#reactjs', '#responsive-design', '#css-modules', '#font-end'],
      buttonProps: {
        primary: {
          overlineLabel: 'código',
          isHref: true,
          href: 'https://github.com/lucianesantcs/portfolio',
        },
      },
    },
    {
      title: 'credit card checkout',
      description: 'Design de um checkout de pagamento com cartão de crédito',
      image: 'assets/images/projects/credit-card-checkout.png',
      fullImage: 'assets/images/projects/credit-card-checkout-full.png',
      tags: ['#figma', '#design', '#pessoal'],
      buttonProps: {
        primary: {
          overlineLabel: 'pré-visualização',
          isHref: true,
          href: 'https://dribbble.com/shots/14206123-Credit-Card-Checkout',
        },
        secondary: {
          overlineLabel: 'layout',
          isHref: true,
          href: 'https://www.figma.com/design/AfUQbKpjFLUqoadJxxUU2y/pessoal-%2F-designs?node-id=7-784',
        },
      },
    },
    {
      title: 'animais fantásticos',
      description:
        'Site desenvolvido no curso de JavaScript ES6+ completo pela Origamid',
      image: 'assets/images/projects/animais-fantasticos.png',
      fullImage: 'assets/images/projects/animais-fantasticos-full.png',
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
          href: 'https://github.com/lucianesantcs/animais-fantasticos',
        },
      },
    },
    {
      title: 'doe',
      description:
        'Sistema de cadastro para doadores de sangue, desenvolvido na Maratona Dev da Rocketseat',
      image: 'assets/images/projects/doe.png',
      fullImage: 'assets/images/projects/doe-full.png',
      tags: [
        '#javascript',
        '#nodejs',
        '#font-end',
        '#back-end',
        '#postgresql',
        '#nunjucks',
        '#contributed',
      ],
      buttonProps: {
        primary: {
          overlineLabel: 'código',
          isHref: true,
          href: 'https://github.com/lucianesantcs/doe/',
        },
      },
    },
    {
      title: 'techno-store',
      description:
        'Aplicação que simula uma loja de eletrônicos desenvolvida com VueJs 2 no curso da Origamid',
      image: 'assets/images/projects/techno-store.png',
      fullImage: 'assets/images/projects/techno-store-full.png',
      tags: ['#vuejs', '#javascript', '#html', '#css', '#font-end', '#fakeapi'],
      buttonProps: {
        primary: {
          overlineLabel: 'código',
          isHref: true,
          href: 'https://github.com/lucianesantcs/origamid-vue/tree/master/techno-store',
        },
      },
    },
    {
      title: 'techno-cursos',
      description:
        'Aplicação de cursos desenvolvida com estrutura completa do VueJs 2 no curso da Origamid',
      image: 'assets/images/projects/techno-cursos.png',
      fullImage: 'assets/images/projects/techno-cursos-full.png',
      tags: ['#vuejs', '#javascript', '#html', '#css', '#font-end', '#fakeapi'],
      buttonProps: {
        primary: {
          overlineLabel: 'código',
          isHref: true,
          href: 'https://github.com/lucianesantcs/origamid-vue/tree/master/techno-cursos',
        },
      },
    },
  ],
};
