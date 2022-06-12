export class Invoice {
    // protected client: string;
    // details: string;
    // amount: number;
    // readonly invNumber: string;
    //   constructor(c: string, d: string, a: number, i: string) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    //     this.invNumber = i;
    //   }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // Not allowed because it is read only property
        // this.invNumber = 'inv003'
        this.client = "Emir";
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
