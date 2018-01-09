import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LibModule } from '../../lib/lib.module';

import { DashboardComponent } from './dashboard.component';

export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LibModule
  ],
  declarations: [
    DashboardComponent
  ],
})

export class DashboardModule { }
