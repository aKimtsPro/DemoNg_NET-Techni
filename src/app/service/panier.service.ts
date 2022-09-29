import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Produit } from '../exo/components/exo-forms/produit.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private _produits: Produit[] = []
  private _panierChanged$ = new BehaviorSubject<Produit[]>(this._produits);

  constructor() { }

  addToCart(toAdd: Produit){
    this._produits.push( toAdd );
    this._panierChanged$.next( this.produits )
  }

  get total(){
    let total = 0;
    this._produits.forEach(p => total += p.prix);
    return total;
  }

  get produits(): Produit[]{
    return [...this._produits]; // permet de faire une copie de la liste: crée une liste contenant les éléments de l'originale
  }

  remove(produit: Produit){
    const index = this._produits.indexOf(produit);
    this._produits.splice(index, 1);
    this._panierChanged$.next(this.produits)
  }

  get panierChanged(): Observable<Produit[]> {
    return this._panierChanged$.asObservable();
  }

}
