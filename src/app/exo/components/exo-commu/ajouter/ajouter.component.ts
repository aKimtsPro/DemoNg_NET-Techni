import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent implements OnInit {

  toAdd: string = '';

  @Output('add')
  addEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    const trimed = this.toAdd.trim();
    const regex = new RegExp("[a-zA-Z]+");

    if( trimed.length > 0 && regex.test(trimed) )
      this.addEmitter.emit( trimed );
  }

}
