import { OverlayModule } from '@angular/cdk/overlay';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { BreakpointsService } from '../../services/breakpoints/breakpoints.service';
import { ButtonComponent } from '../button/button.component';
import { DropdownLinksComponent } from '../dropdown-links/dropdown-links.component';
import { ILink } from '../link/link.interface';
import { RouterLinkComponent } from '../router-link/router-link.component';
import { IRouterLink } from '../router-link/router-link.interface';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    OverlayModule,
    RouterLinkComponent,
    ButtonComponent,
    DropdownLinksComponent,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Input({ required: true }) navLinks!: IRouterLink[];
  @Input() dropdownLinks!: ILink[];
  @Input() dropdownRouterLinks!: IRouterLink[];
  @Output() filteredLinksEvent = new EventEmitter<ILink[]>();

  private breakPoints = inject(BreakpointsService);
  protected isSMbreakPoint!: boolean;
  protected isMDbreakPoint!: boolean;
  protected colapseDropdownLinks!: boolean;
  protected filteredLinks!: ILink[];
  public showDropdown!: boolean;

  constructor() {
    this.breakPoints.getBreakpoint(['sm', 'md']).subscribe(({ sm, md }) => {
      this.isSMbreakPoint = sm;
      this.isMDbreakPoint = md;
    });
  }

  protected colapseDropdownLinksClick(routerLink?: IRouterLink | string): void {
    const routerLinkType = routerLink as IRouterLink;
    const routerLinkString = routerLink as string;

    if (routerLinkType?.isCollapsible) {
      this.showDropdown = !this.showDropdown;
    }

    if (routerLinkString === 'mobile') {
      this.showDropdown = !this.showDropdown;
    }
  }

  protected selectedLink($event: ILink) {
    const filteredLinks = this.dropdownLinks.filter((link) => {
      return link.key === $event.key;
    });

    this.filteredLinks = [...filteredLinks];
    this.filteredLinksEvent.emit(this.filteredLinks);
  }
}
