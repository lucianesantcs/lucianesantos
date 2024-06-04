import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { IButton, IButtonEventProps } from './button.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, IconComponent],
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

  protected getButtonStyle(): string {
    return this.buttonProps?.style || '';
  }
}
