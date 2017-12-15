import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AdminComponent } from './admin.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { AdminService } from './admin.service';

const adminRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]}
]);

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    adminRouting
  ],
  declarations: [AdminComponent],
  providers: [AuthGuard, AdminService]
})
export class AdminModule { }
