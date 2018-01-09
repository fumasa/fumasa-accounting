import { Pipe, PipeTransform } from '@angular/core';
import { Routes } from '@angular/router';

@Pipe({
  name: 'filterRoutes'
})
export class FilterRoutesPipe implements PipeTransform {

  transform(value: Routes, args?: any): any {
    return value.filter(r => r.data);
  }

}