import { DetalheLaudoComponent } from './../../../pages/laudos/detalhe-laudo/detalhe-laudo.component';
import { SidenavComponent } from './../../../components/sidenav/sidenav.component';
import { NavRoutingComponent } from './nav-routing.component';
import { Routes } from '@angular/router';

export const NavigationRouting: Routes = [
    {
        path: '', component: NavRoutingComponent,
        children: [
            {
                path: '', loadChildren: () => import('../../../components/sidebar/sidebar.module').
                    then(m => m.SidebarRoutingModule)
            },
            {
                path: 'laudos', component: SidenavComponent,
                children: [
                    { path: 'detalhe-laudo', component: DetalheLaudoComponent }
                ]
            }

        ]
    }
]