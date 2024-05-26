import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { ILinkOptions, IProjects } from './projects.interface';
import { TitleComponent } from '../../shared/components/title/title.component';
import { BreakpointsService } from '../../shared/services/breakpoints/breakpoints.service';
import { CARD_PROPS } from './projects.const';
import { LinkComponent } from '../../shared/components/link/link.component';
import { ICardProps } from '../../shared/components/card/card.interface';
import { IconType } from '../../shared/components/icon/icon.type';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TitleComponent, CardComponent, LinkComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  private breakPoints = inject(BreakpointsService);
  protected cardProps: IProjects = CARD_PROPS;
  protected isMDbreakPoint!: boolean;
  protected projectType: 'main' | 'others' = 'main';
  protected projects!: ICardProps[];
  protected projectQtd!: number;
  protected linkOptions!: ILinkOptions;
  protected subTitle!: string;

  constructor() {
    this.breakPoints.getBreakpoint(['md'])?.subscribe(({ md }) => {
      this.isMDbreakPoint = md;
    });
  }

  protected changeProjectType(projectType: 'main' | 'others') {
    this.projects = this.cardProps[projectType];
    this.projectType = projectType;
    this.projectQtd = this.cardProps?.others?.length;
    this.subTitle =
      projectType === 'main'
        ? 'Principais desenvolvimentos'
        : 'Outros projetos';

    this.setLinkOptions();
  }

  private setLinkOptions(): void {
    const setProjectLabel =
      this.projectType === 'main'
        ? `Ver mais ${this.projectQtd} Projetos`
        : 'Voltar';

    const switchLink = this.projectType === 'others' ? 'main' : 'others';
    const switchIcon = this.projectType === 'others' ? 'MoveLeft' : 'MoveRight';

    this.linkOptions = {
      link: {
        name: setProjectLabel,
        key: 'mais projetos',
        active: false,
        default18Font: true,
      },
      iconProps: {
        iconName: switchIcon as IconType,
      },
      changeProjectType: switchLink,
    };
  }

  ngOnInit(): void {
    this.changeProjectType(this.projectType);
    this.setLinkOptions();
  }
}
