import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { ProfileComponent } from './profile.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'profile', component: ProfileComponent}
]);