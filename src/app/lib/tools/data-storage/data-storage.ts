import { Instance } from './instance';
import { Property } from './property';
import { Value } from './value';

import { Guid } from './guid';

export class DataStorage {
  private collections: string[] = [];
  private instances: Instance[] = [];
  private properties: Property[] = [];
  private values: Value[] = [];

  public Save<T>(data: T, guid: string = null): void {

    const collection: string = data.constructor.name;
    const propertiesList: string[] = Object.keys(data);

    if (this.collections.indexOf(collection) == -1) {
      this.collections.push(collection);

      propertiesList.forEach(prop => {
        this.properties.push(<Property>{ collection: collection, property: prop });
      });
    }
    
    if (guid == null) {
      guid = Guid.newGuid();
      this.instances.push(<Instance>{ collection: collection, id: guid });

      propertiesList.forEach(prop => {
        this.values.push(<Value>{ instance: guid, property: prop, value: data[prop] });
      });
    } else {
      const instance = this.instances.filter((i: Instance) => i.id === guid)[0];
      if (instance == null) console.log(`guid not found: ${guid}`);
      
    }
  }

  public Load<T>(name: string, ...args: any[]) : T {
      const instance = Object.create(window[name].prototype);
      instance.constructor.apply(instance, args);
      return <T> instance;
  }
}