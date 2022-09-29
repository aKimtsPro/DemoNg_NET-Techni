import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { debounce, debounceTime, delay, map, Subscription, tap } from 'rxjs';
import { PanierService } from 'src/app/service/panier.service';
import { Produit } from '../produit.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  @Input()
  produits!: Produit[];
  private _cheapItemSub: Subscription;

  constructor(private _panierServ: PanierService) {
    this._cheapItemSub = _panierServ.cheapItemAdded
      .pipe( 
        tap( next => console.log("peeping at " + next.nom) ),
        delay( 1000 ),
        debounceTime( 1000 ),
        map( prod => prod.nom )
      )
      .subscribe( nom => alert( nom + " ajouté - c'est une bonne affaire" ) )
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this._cheapItemSub.unsubscribe();
  }

  addToCart(toAdd: Produit){
    this._panierServ.addToCart(toAdd);
  }

}
