import { Component, OnInit } from '@angular/core';
import { Produit } from './produit.model';

@Component({
  selector: 'app-exo-forms',
  templateUrl: './exo-forms.component.html',
  styleUrls: ['./exo-forms.component.scss']
})
export class ExoFormsComponent implements OnInit {

  produits: Produit[] = [
    {
      nom:"prod1",
      marque: "mamark",
      prix: 5,
      categorie: "meuble"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onCreated(produit: Produit){
    this.produits.push(produit)
  }

}
