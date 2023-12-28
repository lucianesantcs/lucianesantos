import { Component, Input } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { ILink } from '../link/link.interface';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [LinkComponent, ButtonComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Input({ required: true }) navLinks!: ILink[];
}
