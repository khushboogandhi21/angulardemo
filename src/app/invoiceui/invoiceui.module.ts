import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceHomeComponent } from './invoicehome/invoicehome.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from   '@angular/forms';


const routes:Routes = [
{path:'invoicehome', component: InvoiceHomeComponent}
];

@NgModule({
  declarations: [
    InvoiceHomeComponent

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
