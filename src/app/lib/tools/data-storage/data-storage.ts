import { Instance } from './instance';
import { Property } from './property';
import { Value } from './value';

import * as handlers from '../../models';

import { Guid } from './guid';

export class DataStorage {
  private instances: Instance[];
  private values: Value[];

  constructor() {
    this.LoadAll();
  }

  private LoadAll() {
    this.instances = this.Instances;
    this.values = this.Values ;

    console.debug('[DataStorage] LoadAll', this.instances, this.values);
  }

  private SaveAll() {
    this.Instances = this.instances;
    this.Values = this.values;
  }

  private set Instances(value: Instance[]) {
    this.setToStorage('[dataStorage]instances', JSON.stringify(value));
  }
  private get Instances(): Instance[] {
    return this.getFromStorage<Instance[]>('[dataStorage]instances') || [];
  }

  private set Values(value: Value[]) {
    this.setToStorage('[dataStorage]values', JSON.stringify(value));
  }
  private get Values(): Value[] {
    return this.getFromStorage<Value[]>('[dataStorage]values') || [];
  }

  private getFromStorage<T>(key: string): T {
    return <T>JSON.parse(localStorage.getItem(key));
  }
  private setToStorage(key, value: any) {
    localStorage.setItem(key, value);
  }

  public Save<T>(data: T, guid: string = null): string {

    const collection: string = data.constructor.name;
    const propertiesList: string[] = Object.keys(data);
    
    if (guid == null) {
      guid = guid = Guid.newGuid();
      this.instances.push(<Instance>{ collection: collection, id: guid });

      propertiesList.forEach(prop => {
        this.values.push(<Value>{ instance: guid, property: prop, value: data[prop] });
      });
    } else {
      if (this.instances.filter((i: Instance) => i.id === guid)[0] == null) console.log(`guid not found: ${guid}`);
      
      propertiesList.forEach(prop => {
        (<Value> this.values.filter((v: Value) => v.instance === guid && v.property === prop)[0]).value = data[prop];
      });
    }

    console.debug('[DataStorage] Save', this.instances, this.values);
    this.SaveAll();
    return guid;
  }

  private static getInstance<T>(context: any, name: string, ...args: any[]) : T {
    const instance = Object.create(context[name].prototype);
    instance.constructor.apply(instance, args);
    return <T> instance;
  }

  public Load<T>(guid: string = null) : T {
    if (this.instances.filter((i: Instance) => i.id === guid)[0] == null) console.log(`guid not found: ${guid}`);
    let instance = this.instances.filter((i: Instance) => i.id === guid)[0];
    const args: any = {};
     
    this.values.filter((v: Value) => v.instance === guid).forEach((v: Value) => {
      args[v.property] = v.value;
    });

    const obj = DataStorage.getInstance<T>(handlers, instance.collection, args);
    console.debug(`[DataStorage] Load`, guid, instance, args, obj);
    return obj;
  }

  public LoadCollection<T>(collection: string): T[] {
    if (this.instances.filter((i: Instance) => i.collection === collection).length == 0) console.log(`collection not found: ${collection}`);

    let collectionInstances: T[] = [];

    this.instances.filter((i: Instance) => i.collection === collection).forEach((i: Instance) => collectionInstances.push(this.Load<T>(i.id)));

    return collectionInstances;
  }
}
