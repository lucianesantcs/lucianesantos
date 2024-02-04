import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILink } from './link.interface';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  @Input({ required: true }) link!: ILink;
  @Output() selectedLink = new EventEmitter<ILink>();

  onSelect(link: ILink) {
    this.selectedLink.emit(link);
  }
}
