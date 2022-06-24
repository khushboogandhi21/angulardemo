import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetsupplierComponent } from './supplierui/getsupplier/getsupplier.component';

const routes: Routes = [
{path:'invoiceui', loadChildren: () => import(`./invoiceui/invoiceui.module`).then(m => m.InvoiceUIModule)},
{path:'supplierui/getsupplier', component: GetsupplierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
