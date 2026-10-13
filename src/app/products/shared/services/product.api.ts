import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let compteur = 0;


@Injectable({
  providedIn: 'root',
})
export class ProductApi {
  protected readonly internalCompteur = 0;

  readonly http = inject(HttpClient);

  constructor() {
    console.log('compteur: ', compteur++);
    console.log('internalCompteur: ', this.internalCompteur++);
    console.log('apres incrément internalCompteur: ', this.internalCompteur);
  }

  // http calls


}
