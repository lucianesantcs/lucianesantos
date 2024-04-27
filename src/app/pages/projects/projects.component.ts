import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { ICardProps } from '../../shared/components/card/card.interface';
import { TitleComponent } from '../../shared/components/title/title.component';
import { BreakpointsService } from '../../shared/services/breakpoints/breakpoints.service';
import { CARD_PROPS } from './projects.const';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TitleComponent, CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private breakPoints = inject(BreakpointsService);
  protected cardProps: ICardProps[] = CARD_PROPS;
  protected isMDbreakPoint!: boolean;

  constructor() {
    this.breakPoints.getBreakpoint(['md'])?.subscribe(({ md }) => {
      this.isMDbreakPoint = md;
    });
  }
}
