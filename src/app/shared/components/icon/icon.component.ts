import { Component, Input } from '@angular/core';
import { LucideAngularModule, LucideIconConfig } from 'lucide-angular';
import { IconType } from './icon.type';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [LucideIconConfig],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input({ required: true }) name: IconType = 'MoveRight';
  @Input() size!: number;
  @Input() color!: string;

  public strokeWidth = 1.5;
}
