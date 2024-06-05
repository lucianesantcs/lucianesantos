import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { IButtonEventProps } from '../../shared/components/button/button.interface';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { SubTitleComponent } from '../../shared/components/sub-title/sub-title.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { CV_BUTTONS, SOCIAL_ICONS } from './about.const';
import {
  ICvButtons,
  ISocialIcons,
  ISocialLinksMapper,
} from './about.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage,
    IconComponent,
    ButtonComponent,
    TitleComponent,
    SubTitleComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  public socialIcons: ISocialIcons[] = SOCIAL_ICONS;
  public cvButton: ICvButtons = CV_BUTTONS;

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
