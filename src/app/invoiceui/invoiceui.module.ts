import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceHomeComponent } from './invoicehome/invoicehome.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
{path:'invoicehome', component: InvoiceHomeComponent}
];

@NgModule({
  declarations: [
    InvoiceHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InvoiceUIModule { }
