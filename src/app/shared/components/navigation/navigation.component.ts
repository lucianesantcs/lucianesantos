import { Component } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { ILink } from '../link/link.interface';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
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
      showIcon: true
    },
    {
      routerLink: '/contact',
      routerLinkLabel: 'Contato',
    },
  ];
}
