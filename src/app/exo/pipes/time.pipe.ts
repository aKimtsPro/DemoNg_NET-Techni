import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(secondes: number): string {
    const mins = Math.floor(secondes / 60).toLocaleString('fr-BE', {
      minimumIntegerDigits: 2
    })

    const secs = (secondes % 60).toLocaleString('fr-BE', {
      minimumIntegerDigits: 2
    })

    return `${ mins } minutes ${ secs } secondes`;
  }

}
