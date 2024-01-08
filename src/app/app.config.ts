import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { provideRouter } from '@angular/router';

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
  Sun,
  Dribbble,
  Mail,
  Languages,
  X,
} from 'lucide-angular';

export const importedLucideIcons = {
  MoveRight,
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
};

const MODULES = [LayoutModule];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      ...MODULES,
      LucideAngularModule.pick(importedLucideIcons),
    ),
  ],
};
