import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo-commu',
  templateUrl: './exo-commu.component.html',
  styleUrls: ['./exo-commu.component.scss']
})
export class ExoCommuComponent implements OnInit {

  produits: string[] = [
    'fraise',
    'banane',
    'pamplemouse',
    'nectarine'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ajouter(produit: string){
    this.produits.push(produit);
    console.log(this.produits)
  }

}
