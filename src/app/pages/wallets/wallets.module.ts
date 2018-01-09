import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LibModule } from '../../lib/lib.module';

import { WalletsComponent } from './wallets.component';

export const routes = [
  { path: '', component: WalletsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LibModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    WalletsComponent
  ],
})

export class WalletsModule { }
