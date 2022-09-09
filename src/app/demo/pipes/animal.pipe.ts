import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from '../components/pipe/animal.model';

@Pipe({
  name: 'animal'
})
export class AnimalPipe implements PipeTransform {

  transform(animal: Animal, formeCourte: boolean = true): string {
    if(formeCourte)
      return `${animal.nom}(espece: ${animal.espece}, age: ${animal.age} ans)`;
    else
      return `${animal.nom}(espece: ${animal.espece}, age: ${animal.age} ans, poid: ${animal.poid}kg, sexe: ${animal.sexe})`;
  }

}
