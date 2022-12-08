import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from'@angular/material/icon';
import{MatButtonModule} from'@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilesComponent } from './profiles/profiles.component';
import { JobiboxComponent } from './jobibox/jobibox.component';

import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { CandidateprofileComponent } from './candidateprofile/candidateprofile.component';

import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyjobComponent } from './myjob/myjob.component';
import { SavedjobsComponent } from './savedjobs/savedjobs.component';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { StepperComponent } from './stepper/stepper.component';
import { EmploymentComponent } from './employment/employment.component';
import { DownversionComponent } from './downversion/downversion.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    FooterComponent,
    HomeComponent,
    StepperComponent,
    SavedjobsComponent,
    MyjobComponent,
    MyprofileComponent,
    ProfilesComponent,
    CandidateprofileComponent,
    SigninComponent,
    JobiboxComponent,
    EmploymentComponent,
    DownversionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
