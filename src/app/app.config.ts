import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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

const LucideIcons = {
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

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick(LucideIcons)),
  ],
};
