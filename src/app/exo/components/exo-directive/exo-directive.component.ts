import { Component, OnInit } from '@angular/core';

interface Produit {
  marque: string;
  modele: string;
  prix: number;
  stock: number;
}

@Component({
  selector: 'app-exo-directive',
  templateUrl: './exo-directive.component.html',
  styleUrls: ['./exo-directive.component.scss']
})
export class ExoDirectiveComponent implements OnInit {

  produits: Produit[] = [
    {
      marque: 'markus',
      modele: 'modelio',
      prix: 21,
      stock: 12
    },
    {
      marque: 'Kemar',
      modele: 'Delimo',
      prix: 200,
      stock: 3
    },
    {
      marque: 'truc',
      modele: 'muche',
      prix: 1,
      stock: 99
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  acheter(produit: Produit){
    produit.stock--;
  }
}
