import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetsupplierComponent } from './getsupplier/getsupplier.component';




@NgModule({
  declarations: [
    GetsupplierComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SupplieruiModule {
  constructor(){
    console.log("SupplieruiModule loaded.")
  }
}
