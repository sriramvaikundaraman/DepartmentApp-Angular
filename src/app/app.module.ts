import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';
import { DepartmentComponent } from './department/department.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SocialLoginModule } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login/public-api';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentDetailComponent,
    DepartmentComponent,
    NotFoundComponent,
    AddDepartmentComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
