import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ILink } from '../link/link.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterTestingModule, NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
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
}
