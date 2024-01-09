import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { IRouterLink } from './router-link.interface';

@Component({
  selector: 'app-router-link',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, IconComponent],
  templateUrl: './router-link.component.html',
  styleUrl: './router-link.component.scss',
  providers: [],
})
export class RouterLinkComponent {
  @Input({ required: true }) routerLink!: IRouterLink['routerLink'];
  @Input({ required: true }) routerLinkLabel!: IRouterLink['routerLinkLabel'];
  @Input() showIcon?: IRouterLink['showIcon'] = false;
  @Input() iconProps!: IRouterLink['iconProps'];
}
