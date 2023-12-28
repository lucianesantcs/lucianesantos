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
  @Input() showIcon?: boolean = false;
  @Input() showLabel?: boolean = true;
  @Input() label: string = 'Label';
  @Input() overlineLabel?: string = 'Overline Label';
  @Input() iconProps?: IButton['iconProps'] = { iconName: 'MoveRight' };
}
