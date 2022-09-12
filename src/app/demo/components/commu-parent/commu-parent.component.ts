import { Component, OnInit } from '@angular/core';

interface ProduitSimple {
  modele: string;
  prix: number;
}

@Component({
  selector: 'app-commu-parent',
  templateUrl: './commu-parent.component.html',
  styleUrls: ['./commu-parent.component.scss']
})
export class CommuParentComponent implements OnInit {

  produits: ProduitSimple[] = [
    {
      modele: 'doritos',
      prix: 3,
    },
    {
      modele: 'grills',
      prix: 2
    },
    {
      modele: 'pirato',
      prix: 0.1
    }
  ] 

  constructor() { }

  ngOnInit(): void {
  }

  getTotal(){
    let total = 0;
    this.produits.forEach(p => total += p.prix);
    return total;
  }

  onInflation(inflation: number){
    this.produits.forEach(p => p.prix += inflation)
  }

}
