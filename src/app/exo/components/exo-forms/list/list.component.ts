import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../produit.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  produits!: Produit[];

  constructor() { }

  ngOnInit(): void {
  }

}
