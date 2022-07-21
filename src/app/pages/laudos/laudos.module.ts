import { CustomerService } from './../../components/models/customerservice';
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

import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { HttpClientModule } from '@angular/common/http';
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
    MultiSelectModule,
    SliderModule,
    ProgressBarModule,
    ReactiveFormsModule,
    RadioButtonModule,
    SelectButtonModule,
    PanelModule,
    PaginatorModule,
    HttpClientModule,
    TableModule,
    RouterModule.forChild(LaudosRoutes)
  ],
  providers: [CustomerService],
})
export class LaudosModule { }
