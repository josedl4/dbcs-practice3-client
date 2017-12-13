import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoachComponent } from './coach.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const coachRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'coach', component: CoachComponent, canActivate: [AuthGuard]}
]);

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    coachRouting
  ],
  declarations: [CoachComponent],
  providers: [AuthGuard]
})
export class CoachModule { }
