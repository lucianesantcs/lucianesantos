import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/components/title/title.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
