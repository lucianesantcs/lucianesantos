import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

import { LinkComponent } from './link.component';
import { RouterLink, RouterLinkWithHref, Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { LucideAngularModule, MoveRight } from 'lucide-angular';
import { DebugElement } from '@angular/core';

describe('LinkComponent', () => {
  let component: LinkComponent;
  let componentDe: DebugElement;
  let fixture: ComponentFixture<LinkComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LinkComponent,
        RouterLink,
        RouterTestingModule.withRoutes([]),
        LucideAngularModule.pick({ MoveRight }),
      ],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    componentDe = fixture.debugElement;
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the right path on routerLink @input', () => {
    component.routerLink = '/about';
    fixture.detectChanges();

    const routerLinkDe = componentDe.query(By.css('a'));
    const aHref = routerLinkDe.nativeElement.getAttribute('href');

    expect(aHref).toEqual('/about');
  });

  it('should navigate to the router passed on routerLink @input', fakeAsync(() => {
    const routerLinkDe = componentDe.query(By.directive(RouterLinkWithHref));

    routerLinkDe.nativeElement.click();

    tick();
    expect(location.path()).toBe('/');
  }));

  it('should set the right label on routerLinkLabel @input', () => {
    component.routerLinkLabel = 'Home';
    fixture.detectChanges();

    const routerLinkLabelDe = componentDe.query(By.css('a'));
    const labelElement = routerLinkLabelDe.nativeElement;

    expect(labelElement.textContent.trim()).toEqual('Home');
  });

  it('should show icon if showIcon @input is true', () => {
    component.showIcon = true;
    component.iconProps = { iconName: 'MoveRight' };
    fixture.detectChanges();

    const iconDe = componentDe.query(By.css('app-icon'));
    const iconElement = iconDe.nativeElement;

    expect(iconElement).toBeDefined();
  });

  it('should not show icon if showIcon @input is false', () => {
    component.showIcon = false;
    fixture.detectChanges();

    const iconDe = componentDe.query(By.css('app-icon'));

    expect(iconDe).toBeNull();
  });
});
