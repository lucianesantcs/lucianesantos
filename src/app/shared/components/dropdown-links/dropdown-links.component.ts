import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { ILink } from '../link/link.interface';

@Component({
  selector: 'app-dropdown-links',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './dropdown-links.component.html',
  styleUrl: './dropdown-links.component.scss',
})
export class DropdownLinksComponent implements OnInit {
  @Input() links: ILink[] = [];
  @Output() selectedLink = new EventEmitter<ILink>();

  ngOnInit(): void {
    this.selectedLink.emit(this.links[0]);
  }

  onSelect(link: ILink) {
    this.links.forEach((l) => {
      if (l?.key === link?.key) {
        l.active = true;
      } else {
        l.active = false;
      }
    });

    this.links = [...this.links];
    this.selectedLink.emit(link);
  }
}
