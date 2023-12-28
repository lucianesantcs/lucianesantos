import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { IButtonIconProps } from './button.interface';

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
  @Input() overlineLabel!: string;
  @Input() iconProps?: IButtonIconProps = {
    iconName: 'MoveRight',
    iconSize: 16,
  };
}
