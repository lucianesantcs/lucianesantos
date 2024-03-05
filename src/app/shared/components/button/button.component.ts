import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { IButton, IButtonEventProps } from './button.interface';

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
  @Output() clickEvent = new EventEmitter<IButtonEventProps>();

  public click(event: Event) {
    this.clickEvent.emit({
      eventTarget: event?.target,
      buttonProps: this.buttonProps,
      iconProps: this.iconProps,
    });
  }
}
