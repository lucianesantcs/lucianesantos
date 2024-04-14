import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DividerComponent } from '../../shared/components/divider/divider.component';
import { RouterLinkComponent } from '../../shared/components/router-link/router-link.component';
import { SubTitleComponent } from '../../shared/components/sub-title/sub-title.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { SECTIONS } from './experience.const';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkComponent,
    TitleComponent,
    SubTitleComponent,
    DividerComponent,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  protected sections = SECTIONS;
}
