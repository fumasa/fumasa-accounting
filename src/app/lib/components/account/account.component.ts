import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Account } from '../../models/';

@Component({
  selector: 'wd-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  @Input() options: FormGroup;
  @Input() account: Account = new Account();

}