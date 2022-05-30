import { FirstAccessComponent } from './components/first-access/first-access.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Routes Default
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'first-access', component: FirstAccessComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    {
        path: '', loadChildren: () => import('./shared/nav-routing/nav-routing/nav-routing.module').
            then(m => m.NavRoutingModule)
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }