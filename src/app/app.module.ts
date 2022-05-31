import { NavRoutingModule } from './shared/nav-routing/nav-routing/nav-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FirstAccessComponent } from './components/first-access/first-access.component';
import { NavRoutingComponent } from './shared/nav-routing/nav-routing/nav-routing.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LaudosModule } from './pages/laudos/laudos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuariosAdmComponent } from './pages/usuarios-adm/usuarios-adm.component';


// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
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
    UsuariosAdmComponent,

  ],
  imports: [
    AppRoutingModule,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    NavRoutingModule,
    LaudosModule,
    FormsModule,
    PanelModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
