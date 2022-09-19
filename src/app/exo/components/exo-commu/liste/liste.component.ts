import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  @Input()
  produits!: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
