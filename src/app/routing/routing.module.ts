import { HomeComponent } from './../home/home.component';
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { UserComponent } from './../user/user.component';
import { NotFoundComponent } from '../not-found/not-found.component';
// import { ProfileComponent } from '../profile/profile.component';

// Defining routes
const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: '', redirectTo: '/goals', pathMatch: 'full'},
  {path: 'user/:id', component: UserComponent},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
 imports: [
   CommonModule,
   RouterModule.forRoot(routes)

 ],
 exports: [RouterModule],
 declarations: []
})
export class RoutingModule { }

