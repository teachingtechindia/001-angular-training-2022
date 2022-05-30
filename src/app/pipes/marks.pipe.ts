import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marks',
  // pure: true,
})
export class MarksPipe implements PipeTransform {
  transform(value: any, ...args: any[]): unknown {
    console.log(
      'marks  pipe transform called >>> parseInt(value)',
      parseInt(value)
    );
    return parseInt(value) > 40 ? 'Pass' : 'Fail';
  }
}
