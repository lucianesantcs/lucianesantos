import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../components/footer/footer.component';
import { HeaderComponent } from '../../../components/header/header.component';
import { ILink } from '../../../components/link/link.interface';
import { IRouterLink } from '../../../components/router-link/router-link.interface';
import { IToggleIconProps } from '../../../components/toggle-icon/toggle-icon.interface';
import { DROPDOWN_LINKS, NAV_LINKS, TOGGLE_ICONS } from './main.const';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  public navLinks: IRouterLink[] = NAV_LINKS;
  public dropdownLinks: ILink[] = DROPDOWN_LINKS;
  public toggleIcons: IToggleIconProps[] = TOGGLE_ICONS;
}
