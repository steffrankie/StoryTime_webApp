import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { SignUpComponent } from './sign-up.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'sign-up', component: SignUpComponent}
]);