import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Transaction } from '../../models/';

@Component({
  selector: 'wd-transaction',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {

  @Input() transaction: Transaction = new Transaction();

}