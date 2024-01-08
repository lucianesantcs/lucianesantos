import { Component, inject } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ILink } from '../link/link.interface';
import { ToggleIconComponent } from '../toggle-icon/toggle-icon.component';
import { IToggleIconProps } from '../toggle-icon/toggle-icon.interface';
import { BreakpointsService } from '../../services/breakpoints/breakpoints.service';

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

  public navLinks: ILink[] = [
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
