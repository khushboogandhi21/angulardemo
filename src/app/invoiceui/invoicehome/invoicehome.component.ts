import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GetinvoiceComponent } from '../getinvoice/getinvoice.component';

@Component({
  selector: 'app-invoicehome',
  templateUrl: './invoicehome.component.html',
  styleUrls: ['./invoicehome.component.css']
})
export class InvoiceHomeComponent implements OnInit,AfterViewInit {

  public user:string = "Khushboo";
  intVar:number = 100;
  buttonVal:string ="Click Here"
  twowayVar ="Initial Value";
  numlist:number[]= [52,41,69];
  isShow:boolean = false;

  @ViewChild(GetinvoiceComponent)  child !: GetinvoiceComponent;   //child to parent via injecting child in parent

 onSave(event: any){
  console.log(event.target.value);
}

  constructor() { }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit:Setting intVar parent variable");
   // this.child.childVar = 700;  //Gives error in console
    /*ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value for 'value': '100'. Current value: '700'.. Find more at https://angular.io/errors/NG0100
    */
    this.intVar = this.child.childVar;
  }

  ngOnInit(): void {
  }

  getChildVar(childVal : number){
    console.log('event emitted from child:' + childVal);
  }
}
