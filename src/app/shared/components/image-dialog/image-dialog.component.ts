import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { IImageProps } from './image-dialog.interface';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-image-dialog',
  standalone: true,
  imports: [DialogModule, IconComponent],
  templateUrl: './image-dialog.component.html',
  styleUrl: './image-dialog.component.scss',
})
export class ImageDialogComponent {
  @ViewChild('fullImageRef') fullImageRef!: TemplateRef<any>;
  @Input() imageProps!: IImageProps;

  fullImage!: string;

  constructor(public dialog: Dialog) {}

  protected openFullImage(fullImage: IImageProps['fullImage']): void {
    this.dialog.open<string>(this.fullImageRef, {
      width: '65%',
      hasBackdrop: true,
      disableClose: false,
    });

    this.fullImage = fullImage;
  }

  protected closeFullImage(): void {
    this.dialog.closeAll();
  }
}
