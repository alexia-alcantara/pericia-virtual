import { NavigationRouting } from './nav-routing.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(NavigationRouting)
  ]
})
export class NavRoutingModule { }
