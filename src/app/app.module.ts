import { NavRoutingModule } from './shared/nav-routing/nav-routing/nav-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FirstAccessComponent } from './components/first-access/first-access.component';
import { NavRoutingComponent } from './shared/nav-routing/nav-routing/nav-routing.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LaudosModule } from './pages/laudos/laudos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    FirstAccessComponent,
    NavRoutingComponent,
    SidebarComponent,
    SidenavComponent,
    NavbarComponent,

  ],
  imports: [
    AppRoutingModule,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    NavRoutingModule,
    LaudosModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
