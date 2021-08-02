import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { IncidentsComponent } from './incidents/incidents.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    RegisterModalComponent,
    IncidentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
