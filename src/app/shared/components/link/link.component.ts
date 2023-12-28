import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { ILink } from './link.interface';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, IconComponent],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  providers: [],
})
export class LinkComponent {
  @Input({ required: true }) routerLink!: ILink['routerLink'];
  @Input({ required: true }) routerLinkLabel!: ILink['routerLinkLabel'];
  @Input() showIcon?: ILink['showIcon'] = false;
  @Input() iconProps!: ILink['iconProps'];
}
