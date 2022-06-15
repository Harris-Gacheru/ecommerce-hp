import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, characters: number): string {
    if (value.length > characters) {
      return value.substring(0, characters)+ '...'
    }

    return value
  }

}
