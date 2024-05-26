import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILink } from './link.interface';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  @Input({ required: true }) link!: ILink;
  @Input() showIcon?: ILink['showIcon'] = false;
  @Input() iconProps!: ILink['iconProps'];

  @Output() selectedLink = new EventEmitter<ILink>();

  onSelect(link: ILink) {
    this.selectedLink.emit(link);
  }
}
