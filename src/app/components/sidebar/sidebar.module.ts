import { SidebarRouting } from './sidebar.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(SidebarRouting)
  ]
})
export class SidebarRoutingModule { }
