import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceHomeComponent } from './invoicehome/invoicehome.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from   '@angular/forms';
import { CreateinvoiceComponent } from './createinvoice/createinvoice.component';
import { GetinvoiceComponent } from './getinvoice/getinvoice.component';


const routes:Routes = [
{path:'invoicehome', component: InvoiceHomeComponent}
];

@NgModule({
  declarations: [
    InvoiceHomeComponent,
    CreateinvoiceComponent,
    GetinvoiceComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class InvoiceUIModule {
 constructor(){
  console.log("InvoiceUIModule loaded.");
 }

 }
