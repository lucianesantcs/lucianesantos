import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { SubTitleComponent } from '../../shared/components/sub-title/sub-title.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { ISocialIcons } from './about.interface';

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
  public socialIcons: ISocialIcons[] = [
    {
      buttonProps: {
        showIcon: true,
      },
      iconProps: {
        iconName: 'Github',
      },
    },
    {
      buttonProps: {
        showIcon: true,
      },
      iconProps: {
        iconName: 'Linkedin',
      },
    },
    {
      buttonProps: {
        showIcon: true,
      },
      iconProps: {
        iconName: 'Dribbble',
      },
    },
    {
      buttonProps: {
        showIcon: true,
      },
      iconProps: {
        iconName: 'Mail',
      },
    },
  ];
}
