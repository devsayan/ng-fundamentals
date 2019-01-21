import {Pipe, PipeTransform} from '@angular/core';
 @Pipe(
     {name : 'numeric'}
 )
 export class NumericPipe implements PipeTransform {
    transform(value: number): string {
      switch(value){
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
      }
    }
  }