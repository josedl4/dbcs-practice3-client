import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { CoachModule } from './coach/coach.module';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([],
  {useHash: true});

/**
 * Modulo principal de la aplicación
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    rootRouting,
    LoginModule,
    AdminModule,
    CoachModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
