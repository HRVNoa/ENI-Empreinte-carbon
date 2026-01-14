import { Routes } from '@angular/router';
import {CarbonFootprint} from './pages/carbon-footprint/carbon-footprint';
import {Home} from './pages/home/home';
import {authGuardGuard} from './guard/auth-guard-guard';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'footprint', component: CarbonFootprint, canActivate: [authGuardGuard]},
  // {path: 'test/:id', component: },
];
