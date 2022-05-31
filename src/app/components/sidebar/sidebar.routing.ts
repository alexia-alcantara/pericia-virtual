import { UsuariosAdmComponent } from './../../pages/usuarios-adm/usuarios-adm.component';
import { SidebarComponent } from './sidebar.component';
import { Routes } from '@angular/router';

export const SidebarRouting: Routes = [
    {
        path: '', component: SidebarComponent,
        children: [
            {
                path: 'laudos', loadChildren: () => import('../../pages/laudos/laudos.module').
                    then(m => m.LaudosModule)
            },
            { path: 'usuarios-administrativos', component: UsuariosAdmComponent }
        ]
    }
]