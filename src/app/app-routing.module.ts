import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateprofileComponent } from './candidateprofile/candidateprofile.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MyjobComponent } from './myjob/myjob.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { RegisterComponent } from './register/register.component';
import { SavedjobsComponent } from './savedjobs/savedjobs.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  {
    path:'homecomponent',component:HomeComponent
  },
  {
    path:'candidateprofile', component: CandidateprofileComponent,
    children: [
      // {
      //   path:'',component:MyprofileComponent
      // },
      {
        path: 'myprofile',component: MyprofileComponent
      },
      {
        path: 'myjob',component:MyjobComponent
      },
      {
        path:'savedjobs',component:SavedjobsComponent
      },
      
    ]

  },
  { path: 'signin',component:SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
