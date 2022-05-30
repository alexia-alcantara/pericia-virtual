import { RouterModule } from '@angular/router';
import { LaudosComponent } from './laudos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LaudosRoutes } from './laudos.routing';

import { DetalheLaudoComponent } from './detalhe-laudo/detalhe-laudo.component';

// PrimeNG
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { LaudoRejeitadoComponent } from './laudo-rejeitado/laudo-rejeitado.component';


@NgModule({
  declarations: [
    LaudosComponent,
    DetalheLaudoComponent,
    LaudoRejeitadoComponent
  ],
  imports: [
    AccordionModule,
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonModule,
    SelectButtonModule,
    PanelModule,
    PaginatorModule,
    TableModule,
    RouterModule.forChild(LaudosRoutes)
  ]
})
export class LaudosModule { }
