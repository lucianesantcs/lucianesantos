import { LayoutModule } from '@angular/cdk/layout';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation, withViewTransitions } from '@angular/router';

import {
  ChevronDown,
  ChevronUp,
  Download,
  Dribbble,
  Github,
  Languages,
  Linkedin,
  LucideAngularModule,
  Mail,
  Menu,
  Moon,
  MoveLeft,
  MoveRight,
  Sun,
  X,
} from 'lucide-angular';
import { routes } from './app.routes';

export const importedLucideIcons = {
  MoveRight,
  MoveLeft,
  ChevronDown,
  ChevronUp,
  Moon,
  Sun,
  Github,
  Linkedin,
  Dribbble,
  Mail,
  Languages,
  Menu,
  X,
  Download,
};

const MODULES = [LayoutModule];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions(), withHashLocation()),
    importProvidersFrom(
      ...MODULES,
      LucideAngularModule.pick(importedLucideIcons),
      Animation,
    ),
  ],
};
