import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { MainComponent } from './main.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'main', component: MainComponent}
]);