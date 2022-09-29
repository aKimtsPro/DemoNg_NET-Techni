import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/service/panier.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private _panierServ: PanierService) {}

  ngOnInit(): void {
  }

  get total(){
    return this._panierServ.total;
  }

}
