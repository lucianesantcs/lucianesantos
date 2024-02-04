import { Component, inject } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { IRouterLink } from '../router-link/router-link.interface';
import { ToggleIconComponent } from '../toggle-icon/toggle-icon.component';
import { IToggleIconProps } from '../toggle-icon/toggle-icon.interface';
import { BreakpointsService } from '../../services/breakpoints/breakpoints.service';
import { ILink } from '../link/link.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterTestingModule, NavigationComponent, ToggleIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private breakPoints = inject(BreakpointsService);
  protected isSMbreakPoint!: boolean;
  protected isMDbreakPoint!: boolean;

  constructor() {
    this.breakPoints.getBreakpoint(['sm', 'md'])?.subscribe(({ sm, md }) => {
      this.isSMbreakPoint = sm;
      this.isMDbreakPoint = md;
    });
  }

  public navLinks: IRouterLink[] = [
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
      isCollapsible: true,
      showIcon: true,
      iconProps: {
        iconName: 'ChevronDown',
      },
    },
    {
      routerLink: '/contact',
      routerLinkLabel: 'Contato',
    },
  ];

  public dropdownLinks: ILink[] = [
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

  public toggleIcons: IToggleIconProps[] = [
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
}
