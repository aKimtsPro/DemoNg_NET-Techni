import { Component, Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/service/panier.service';
import { Produit } from '../produit.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  produits!: Produit[];

  constructor(private _panierServ: PanierService) {
  }

  ngOnInit(): void {
  }

  addToCart(toAdd: Produit){
    this._panierServ.addToCart(toAdd);
  }

}
