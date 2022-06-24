import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { firstValueFrom, map, Observable } from 'rxjs';
import {Invoice} from  '../dto/invoice-dto';
import {InvoiceService} from '../services/invoice.service';

@Component({
  selector: 'app-getinvoice',
  templateUrl: './getinvoice.component.html',
  styleUrls: ['./getinvoice.component.css']
})
export class GetinvoiceComponent implements OnInit {

  invoiceList !: Observable<Invoice[]>; ;

  //invoiceObj !: Observable<Invoice>;
  invoiceObj !: Observable<Invoice>;
  invoice !: Invoice;

  @Input() childVar : number = 0;  //if don't define number type it iterprets to any type   //Parent to Child

  @Output() childEvent = new EventEmitter<number>();  //Child to Parent


  //constructor injection of invoiceservice
  constructor(private invoiceService : InvoiceService) {
    
    console.log("Inside constructor");
   
    //WORKING 
    // invoiceService.getInvoice("/api/getAllInvoices").subscribe(item=>
    //   {console.log("item isss="+ item);    
    //   this.invoiceList = item;
    // } );

    //Used | async in html with below and converted invoiceList to type Observable above declaration
    this.invoiceList = invoiceService.getInvoice("/api/getAllInvoices");

    this.invoiceObj = invoiceService.getInvoiceById("/api/getInvoiceById", 91);  //Observable call
    
    // this.invoiceObj.then((data) => {
    //   this.invoice = data;
    //   console.log("this.invoice="+this.invoice.amount);
    // });

    console.log('invoiceObj=' + this.invoiceObj);

    
   // invoiceService.getInvoiceById("/api/getInvoiceById", 91).subscribe(data=>console.log("getInvoiceById = " + data));
  }

  ngOnInit(): void {
    this.loadInvoiceById();  //Promise call
  }

  sendDataToParent( ){
    this.childVar = 300;
    this.childEvent.emit(this.childVar);
  }
  public async loadInvoiceById() {
    const categories$ = this.invoiceService.getInvoiceById("/api/getInvoiceById", 91);
    this.invoice = await firstValueFrom(categories$);
  
  }
}
