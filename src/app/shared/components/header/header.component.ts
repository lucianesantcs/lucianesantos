import { Component, Input, inject } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { IRouterLink } from '../router-link/router-link.interface';
import { ToggleIconComponent } from '../toggle-icon/toggle-icon.component';
import { IToggleIconProps } from '../toggle-icon/toggle-icon.interface';
import { BreakpointsService } from '../../services/breakpoints/breakpoints.service';
import { ILink } from '../link/link.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationComponent, ToggleIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input({ required: true }) navLinks!: IRouterLink[];
  @Input() dropdownLinks!: ILink[];
  @Input() toggleIcons!: IToggleIconProps[];

  private breakPoints = inject(BreakpointsService);
  protected isSMbreakPoint!: boolean;
  protected isMDbreakPoint!: boolean;

  constructor() {
    this.breakPoints.getBreakpoint(['sm', 'md'])?.subscribe(({ sm, md }) => {
      this.isSMbreakPoint = sm;
      this.isMDbreakPoint = md;
    });
  }
}
