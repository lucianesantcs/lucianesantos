import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { IToggleIconProps } from './toggle-icon.interface';
import { IButtonEventProps } from '../button/button.interface';

@Component({
  selector: 'app-toggle-icon',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './toggle-icon.component.html',
  styleUrl: './toggle-icon.component.scss',
})
export class ToggleIconComponent {
  @Input({ required: true }) toggleIconProps!: IToggleIconProps;
  @Output() toggleEvent = new EventEmitter<IButtonEventProps>();

  public click(target: IButtonEventProps) {
    if (target.buttonProps) {
      target.buttonProps.isActive = !target.buttonProps.isActive;
    }

    this.toggleEvent.emit(target);
  }
}
