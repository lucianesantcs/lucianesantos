import { Component, Input, inject } from '@angular/core';
import { BreakpointsService } from '../../services/breakpoints/breakpoints.service';

@Component({
  selector: 'app-sub-title',
  standalone: true,
  imports: [],
  templateUrl: './sub-title.component.html',
  styleUrl: './sub-title.component.scss',
})
export class SubTitleComponent {
  @Input({ required: true }) subtitle!: string;
  @Input() suffixSubtitle?: string;
  @Input() showDivider = true;

  private breakPoints = inject(BreakpointsService);
  protected isSMbreakPoint!: boolean;

  constructor() {
    this.breakPoints.getBreakpoint(['sm'])?.subscribe(({ sm }) => {
      this.isSMbreakPoint = sm;
    });
  }
}
