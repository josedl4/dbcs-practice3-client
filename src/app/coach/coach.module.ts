import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthGuard } from '../shared/guards/auth.guard';
import { CoachAddComponent } from './coach-add/coach-add.component';
import { CoachDeleteComponent } from './coach-delete/coach-delete.component';
import { CoachService } from './coach.service';

/**
 * Ruteamos entre las opciones del admin
 */
const coachRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'coach-add', component: CoachAddComponent, canActivate: [AuthGuard] },
  { path: 'coach-delete', component: CoachDeleteComponent, canActivate: [AuthGuard]}
]);

/**
 * Modulo Entrenador
 */
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    coachRouting
  ],
  declarations: [CoachAddComponent, CoachDeleteComponent],
  providers: [AuthGuard, CoachService]
})
export class CoachModule { }
