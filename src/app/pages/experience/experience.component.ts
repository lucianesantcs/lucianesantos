import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DividerComponent } from '../../shared/components/divider/divider.component';
import { RouterLinkComponent } from '../../shared/components/router-link/router-link.component';
import { SubTitleComponent } from '../../shared/components/sub-title/sub-title.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { SECTIONS } from './experience.const';
import { BreakpointsService } from '../../shared/services/breakpoints/breakpoints.service';

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
  private breakPoints = inject(BreakpointsService);
  protected isSMbreakPoint!: boolean;
  protected isMDbreakPoint!: boolean;
  protected isXLbreakPoint!: boolean;
  protected sections = SECTIONS;

  constructor() {
    this.breakPoints
      .getBreakpoint(['sm', 'md', 'xl'])
      ?.subscribe(({ sm, md, xl }) => {
        this.isSMbreakPoint = sm;
        this.isMDbreakPoint = md;
        this.isXLbreakPoint = xl;
      });
  }
}
