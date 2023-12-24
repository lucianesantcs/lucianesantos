import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';

import { LucideAngularModule, MoveRight } from 'lucide-angular';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconComponent, LucideAngularModule.pick({ MoveRight })],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the default value of name to move-right if no input is provided ', () => {
    expect(component.name).toBe('MoveRight');
  });

  it('should allow setting the name input to a non-default value', () => {
    component.name = 'Mail';
    expect(component.name).toBe('Mail');
  });

  // it('should only allow the name input to be Lucide Icon type', () => {
  //   // TODO: verificar valores component.name com IconType
  // });

  it('should have strokeWidth fixed size 1.5', () => {
    expect(component.strokeWidth).toBe(1.5);
  });
});
