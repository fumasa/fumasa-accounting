import { Date_Min, Date_Max } from './defaults';
import { Transaction } from './transaction';
import { TransactionType } from './transaction-type.enum';
import { v4 as uuid } from 'uuid';

export class Wallet {
  getAmount(filter: (t: Transaction) => boolean = this.defaultFilter): number {
    return this.transactions
      .filter(f => filter(f))
      .map(t => t.TransactionType == TransactionType.Credit 
        ? t.Amount : -1 * t.Amount)
        .reduce((sum, current) => sum + current) || 0;
  }

  get Transactions(): Transaction[] {
    return this.transactions;
  }

  private defaultFilter(t: Transaction): boolean
  {
    return true;
  }

  protected transactions: Transaction[];
  public Name: string;
  readonly id: string;

  constructor(values: { id?: string, name?: string, transactions?: Transaction[] } = {}) {
    this.id = values.id || uuid();
    this.Name = values.name || '';
    this.transactions = values.transactions || [];
  }

  public WalletBetweenDates(init: Date, end: Date): Wallet {
    if (init !== Date_Min)
      if (end !== Date_Max)
        return new Wallet({
          id: this.id, 
          name: `${this.Name}|${init}-${end}`, 
          transactions: this.Transactions.filter((t) => {
              return t.TransactionDate >= init && t.TransactionDate <= end;
            })
          });
      else
        return new Wallet({
          id: this.id, 
          name: `${this.Name}|${init}-`, 
          transactions: this.Transactions.filter((t) => {
              return t.TransactionDate >= init;
            })
          });
    else
      if (end !== Date_Max)
        return new Wallet({
          id: this.id, 
          name: `${this.Name}|-${end}`, 
          transactions: this.Transactions.filter((t) => {
              return t.TransactionDate <= end;
            })
          });
      else
        return this;
  }

  public get Tags(): string[] {
    const tags: string[] = [];
    this.Transactions.forEach((t: Transaction) => t.Tags.forEach(g => tags.indexOf(g) === -1 ? tags.push(g) : {}));
    return tags;
  }
}