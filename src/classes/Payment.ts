import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
  constructor(
    private recipient: string,
    public details: string,
    public amount: number
  ) {}

  format() {
    // Not allowed because it is read only property
    // this.invNumber = 'inv003'
    this.recipient = "Emir";
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
