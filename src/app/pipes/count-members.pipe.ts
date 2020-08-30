import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countMembers'
})
export class CountMembersPipe implements PipeTransform {

  // Pipe que permite recibir un arreglo de tipo Member y contar los miembros de la casa
  transform(value: string[]): number {
    if(value.length > 0) {
      let countMembers: number = 0;

      for (let i = 0; i < value.length; i++) {
        countMembers++;
      }
      return countMembers;
    }
    else {
      return 0;
    }
  }

}
