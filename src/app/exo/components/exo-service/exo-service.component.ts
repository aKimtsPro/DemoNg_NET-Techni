import { Component, EventEmitter, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { PanierService } from 'src/app/service/panier.service';
import { Produit } from '../exo-forms/produit.model';

@Component({
  selector: 'app-exo-service',
  templateUrl: './exo-service.component.html',
  styleUrls: ['./exo-service.component.scss']
})
export class ExoServiceComponent implements OnInit {

  produits!: Produit[];

  constructor(private _service: PanierService) { 
    // this.produits = _service.produits;
    _service.panierChanged.subscribe( data => this.produits = data );  
  }

  ngOnInit(): void {
  }

  removeFromCart(produit: Produit){
    this._service.remove(produit);
  }

}
