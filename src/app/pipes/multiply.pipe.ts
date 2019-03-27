import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value: any, multiValue: any, addValue: any = 0, method: string = "Monthly" ): any {
    return value * multiValue + addValue + method ;
  }

}
