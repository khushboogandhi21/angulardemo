import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from   '@angular/forms';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import {SupplieruiModule} from './supplierui/supplierui.module';
import {HttpClientModule} from '@angular/common/http';



const routes:Routes = [
{path:'appheader', component: AppheaderComponent},
{path:'appfooter', component: AppfooterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SupplieruiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
