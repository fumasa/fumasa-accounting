import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Wallet } from '../../models/';

@Component({
  selector: 'wd-wallet',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {

  @Input() options: FormGroup;
  @Input() wallet: Wallet = new Wallet();

}