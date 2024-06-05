import { CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { ILink } from '../link/link.interface';
import { RouterLinkComponent } from '../router-link/router-link.component';
import { IRouterLink } from '../router-link/router-link.interface';

@Component({
  selector: 'app-dropdown-links',
  standalone: true,
  imports: [OverlayModule, LinkComponent, RouterLinkComponent],
  templateUrl: './dropdown-links.component.html',
  styleUrl: './dropdown-links.component.scss',
})
export class DropdownLinksComponent implements OnInit {
  @Input() links: ILink[] = [];
  @Input() routerLinks: IRouterLink[] = [];
  @Input() triggerOriginReference!: CdkOverlayOrigin;
  @Input() isDropdownOpen!: boolean;
  @Output() selectedLinkEvent = new EventEmitter<ILink>();
  @Output() isDropdownOpenEvent = new EventEmitter<boolean>();

  ngOnInit(): void {
    if (this.links) {
      this.selectedLinkEvent.emit(this.links[0]);
    }
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
    this.selectedLinkEvent.emit(link);
  }
}
