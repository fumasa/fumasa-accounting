import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Wallet } from '../../models/';
import { DataStorage } from '../../tools/data-storage';

@Component({
  selector: 'wd-wallet',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {

  @Input() options: FormGroup;
  @Input() wallet: Wallet = new Wallet();

  constructor() {
    this.testDataStorage();
  }

  public testDataStorage() {
    // const ds = new DataStorage();

    // console.log('load all', ds.LoadCollection('Wallet'));

    // const test = new Wallet({ name: 'testing' });
    // const guid = ds.Save(test);

    // const guid = 'eea77fa0-bf4e-405e-bac9-fe6cf9865624';
    // const obj = ds.Load(guid);

    // console.log("testing DataStorage", guid, obj);

    // if (obj.name !== "blablabla") {
    //   obj.name = "blablabla";
      
    //   ds.Save(obj, guid);
    // }

    // console.log("testing DataStorage", guid, obj);
  }

}