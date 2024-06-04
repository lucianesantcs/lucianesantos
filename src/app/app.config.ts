import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import {
  ChevronDown,
  ChevronUp,
  Github,
  Linkedin,
  LucideAngularModule,
  Menu,
  Moon,
  MoveRight,
  MoveLeft,
  Sun,
  Dribbble,
  Mail,
  Languages,
  X,
  Download,
} from 'lucide-angular';

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
    provideRouter(routes, withViewTransitions()),
    importProvidersFrom(
      ...MODULES,
      LucideAngularModule.pick(importedLucideIcons),
      Animation,
    ),
  ],
};
