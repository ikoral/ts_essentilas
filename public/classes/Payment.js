export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // Not allowed because it is read only property
        // this.invNumber = 'inv003'
        this.recipient = "Emir";
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
