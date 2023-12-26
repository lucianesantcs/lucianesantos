import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { ILinkIconProps } from './link.interface';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, IconComponent],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  providers: [],
})
export class LinkComponent {
  @Input({ required: true }) routerLink!: string;
  @Input({ required: true }) routerLinkLabel!: string;
  @Input() showIcon?: boolean = false;
  @Input() iconProps?: ILinkIconProps = { iconName: 'MoveRight' };
}
