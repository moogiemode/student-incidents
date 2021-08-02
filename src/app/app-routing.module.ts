import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IncidentsComponent } from './incidents/incidents.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

const routes: Routes = [
  { path: 'incidents', component: IncidentsComponent },
  { path: '', component: SignInPageComponent }
  // { path: '', redirectTo: '/sign-in', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
