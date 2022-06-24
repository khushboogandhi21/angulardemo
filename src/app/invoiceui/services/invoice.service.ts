import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Invoice } from '../dto/invoice-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  invoiceList : Array<Invoice> = [];
  // [{id:1, name:"Invoice1",invoiceNumber:"12345", amount: 4546.22},
  // {id:2, name:"Invoice2",invoiceNumber:"12373", amount: 896},
  // {"id":28,"name":"Nonfunc","invoiceNumber":"22","amount":524.3}] ;

  invoice !:Invoice;
  //const cors =  require("cors");
  

  constructor(private http : HttpClient,private zone: NgZone) {
    //this.getInvoice("/api/getAllInvoices");

   }

  // getInvoice(baseUrl : string):Observable<Invoice[]>{
  //    return this.http.get<Invoice[]>(baseUrl);
    
  //   //return this.invoiceList;
  // }

  // getInvoice(baseUrl : string){
  //   console.log('getInvoice: ');
  //   let source = new EventSource(baseUrl);
    
  //   source.addEventListener('message', message => {
  //        JSON.parse(message.data);        
  //   });
    
  // }

  // this.customersList = new Array();

  //   return Observable.create((observer) => {
  //     const eventSource = new EventSource(`${this.baseUrl}`);

  //     eventSource.onmessage = (event) =>
  //       this.zone.run(() => {
  //         console.log('eventSource.onmessage: ', event);
  //         const json = JSON.parse(event.data);
  //         this.customersList.push(new Customer(json['id'], json['name'], json['age'], json['active']));
  //         observer.next(this.customersList);
  //       });

  //     eventSource.onerror = (error) => observer.error('eventSource.onerror: ' + error);

  //     return () => eventSource.close();
  //   });
 
  getInvoice(baseUrl : string):Observable<Invoice[]>{
     console.log('Inside getInvoice: ');  
 
   return new Observable((observer : any) => {
      const eventSource = new EventSource(baseUrl);
      this.invoiceList = [];

      eventSource.onmessage = (response) =>{
        console.log('eventSource.onmessage: ', response);
          this.zone.run(() => {    // without Zone, the SSE[Server-Sent Events] updates won't trigger Angular's change detection.   //NgZone injected  
     
        const json = JSON.parse(response.data);
        console.log('Parsed json: ' + json);
        //  this.invoiceList = response.data;
        //  this.invoiceList = JSON.parse(response.data);
        //  json.map(item=> {return new Invoice(item.id,item.invoiceNumber,item.name,item.amount);});        
        //  this.invoiceList.push(this.invoiceObj);
        //  observer.next(this.invoiceList);
        //  observer.next(
        //  this.invoiceList =  [new Invoice(json['id'], json['invoiceNumber'], json['name'], json['amount'])]);
          
        const invObj: Invoice = new Invoice(json['id'], json['invoiceNumber'], json['name'], json['amount']);

        this.invoiceList.push(invObj);
        console.log("this.invoiceList.length=" + this.invoiceList.length);
        observer.next(this.invoiceList);
         
    });
    eventSource.onerror = (error) => {
      if (eventSource.readyState === 0) {     //0 — connecting         1 — open         2 — closed
        console.log('The stream has been closed by the server.');
        eventSource.close();
        observer.complete();
      } else {
          observer.error('EventSource error: ' + error);
      }
  };
    
      return () => eventSource.close();
    };
     
    });
 }

 getInvoiceById(baseUrl : string, id : number) : Observable<Invoice>{
    console.log('Inside getInvoiceById: ');  

    return new Observable((observer : any) => {
      const eventSource = new EventSource(baseUrl+ '/' + id);      

      eventSource.onmessage = (response) =>{
        console.log('eventSource.onmessage: ', response);
        this.zone.run(() => {    // without Zone, the SSE updates won't trigger Angular's change detection.     
     
        const json = JSON.parse(response.data);
        console.log('Parsed json: ' + json);      
          
        this.invoice = new Invoice(json['id'], json['invoiceNumber'], json['name'], json['amount']);
        
        console.log("this.invoice.name=" + this.invoice.name);
        observer.next(this.invoice);
         
    });
    
    eventSource.onerror = (error) => {
      if (eventSource.readyState === 0) {     //0 — connecting         1 — open         2 — closed
        console.log('The stream has been closed by the server.');
        eventSource.close();
        observer.complete();
      } else {
          observer.error('EventSource error: ' + error);
      }
    }
  }
  });
}

}
