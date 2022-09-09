import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.scss']
})
export class ParamComponent implements OnInit {

  nombre: number;

  constructor(private _route: ActivatedRoute) { 
    this.nombre = _route.snapshot.params['nbr'];
  }

  ngOnInit(): void {
  }

}
