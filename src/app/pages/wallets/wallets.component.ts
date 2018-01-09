import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { /*Account,*/ Wallet, Transaction } from '../../lib/models';

@Component({
  encapsulation: ViewEncapsulation.None,
  templateUrl: './wallets.component.html',
  styleUrls: [ './wallets.component.scss' ]
})
export class WalletsComponent {
  options: FormGroup;
  wallet: Wallet;
  // account: Account;

  constructor(fb: FormBuilder) {
    this.wallet = new Wallet({ transactions: [ new Transaction() ] });
    // this.account = new Account({ wallets: [ this.wallet ] });
    this.options = fb.group({
      hideRequired: false,
      isActive: true,
      floatPlaceholder: 'auto',
    });
  }
}