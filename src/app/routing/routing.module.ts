import { HomeComponent } from './../home/home.component';
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { UserComponent } from './../user/user.component';

// import { ProfileComponent } from '../profile/profile.component';

// Defining routes
const routes: Routes = [
  {path: '', component: HomeComponent},
//  {path: 'user/repositories?', component: ProfileComponent},
 {path: 'user/profile?', component: UserComponent }
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

