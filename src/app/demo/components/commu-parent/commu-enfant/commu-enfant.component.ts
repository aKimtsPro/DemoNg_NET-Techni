import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-commu-enfant',
  templateUrl: './commu-enfant.component.html',
  styleUrls: ['./commu-enfant.component.scss']
})
export class CommuEnfantComponent implements OnInit {

  @Input()
  total = 0;

  @Input('bidule')
  truc: string = '';

  @Output('inflation')
  inflationEmitter = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.inflationEmitter.emit(0.1);
  }

}
