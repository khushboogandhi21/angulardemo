export class Invoice {

    public  id !: number;
    public  name !: string;
    public invoiceNumber !: string;
    public amount !: number;

    constructor(id : number,
          name : string,
         invoiceNumber : string,
         amount : number){

        this.id = id;
        this.invoiceNumber = invoiceNumber;
        this.name = name;
        this.amount = amount;        
    }

    
}
