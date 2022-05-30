import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: any, ...args: any[]): string {
    // console.log('age pipe called: ', args[0]);
    let currentYear: any = new Date().getFullYear();
    let birthYear: any = new Date(value).getFullYear();
    let age = currentYear - birthYear;
    return age + '';
  }
}
