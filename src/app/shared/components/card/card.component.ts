import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ICardProps } from './card.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardProps!: ICardProps;
}
