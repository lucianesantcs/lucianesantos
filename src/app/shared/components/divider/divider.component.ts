import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [NgClass],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.scss',
})
export class DividerComponent {
  @Input() position: 'default' | 'horizontal' = 'default';

  protected setPositionClass(): string {
    return this.position === 'horizontal' ? 'divider-horizontal' : '';
  }
}
