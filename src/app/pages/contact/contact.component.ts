import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { IButtonEventProps } from '../../shared/components/button/button.interface';
import { DividerComponent } from '../../shared/components/divider/divider.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { BreakpointsService } from '../../shared/services/breakpoints/breakpoints.service';
import { ISocialIcons, ISocialLinksMapper } from '../about/about.interface';
import { SOCIAL_ICONS } from './contact.const';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TitleComponent, ButtonComponent, DividerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private breakPoints = inject(BreakpointsService);
  protected socialIcons: ISocialIcons[] = SOCIAL_ICONS;
  protected isMDbreakPoint!: boolean;
  protected isXLbreakPoint!: boolean;

  constructor() {
    this.breakPoints.getBreakpoint(['xl'])?.subscribe(({ md, xl }) => {
      this.isMDbreakPoint = md;
      this.isXLbreakPoint = xl;
    });
  }

  protected socialIconRedirect(icon: IButtonEventProps): void {
    const urls = {
      Github: 'https://github.com/lucianesantcs',
      Linkedin: 'https://www.linkedin.com/in/lucianesantcs/',
      Dribbble: 'https://dribbble.com/lucianesantos',
    };

    window.open(
      urls[icon.iconProps?.iconName as keyof ISocialLinksMapper],
      '_blank',
    );
  }
}
