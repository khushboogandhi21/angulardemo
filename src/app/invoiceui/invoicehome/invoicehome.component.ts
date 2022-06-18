import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoicehome',
  templateUrl: './invoicehome.component.html',
  styleUrls: ['./invoicehome.component.css']
})
export class InvoiceHomeComponent implements OnInit {

  public user:string = "Khushboo";
  intVar:number = 100;
  buttonVal:string ="Click Here"
  twowayVar ="Initial Value";
  numlist:number[]= [52,41,69];
  isShow:boolean = false;

 onSave(event: any){
  console.log(event.target.value);
}

  constructor() { }

  ngOnInit(): void {
  }

}
