import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

/**
 * Routing del login
 */
const loginRouting: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: LoginComponent}
]);

/**
 * Modulo login
 */
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    loginRouting
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
