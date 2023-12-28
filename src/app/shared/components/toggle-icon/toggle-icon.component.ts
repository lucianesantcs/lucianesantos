import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { IToggleIconProps } from './toggle-icon.interface';

@Component({
  selector: 'app-toggle-icon',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './toggle-icon.component.html',
  styleUrl: './toggle-icon.component.scss',
})
export class ToggleIconComponent {
  @Input({ required: true }) toggleIconProps!: IToggleIconProps;
}
