import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { IButton } from './button.interface';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) buttonProps!: IButton;
  @Input() iconProps?: IButton['iconProps'];
}
