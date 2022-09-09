import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss']
})
export class DemoContainerComponent implements OnInit {

  nombre: number = 0;

  constructor( private _router: Router ) {
  }

  ngOnInit(): void {
  }

  checkParite(){
    // this._router.navigateByUrl('/demo/param/' + this.nbr);
    this._router.navigate(['demo', 'param', this.nombre]);
  }



}
