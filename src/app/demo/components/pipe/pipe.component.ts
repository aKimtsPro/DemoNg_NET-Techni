import { Component, OnInit } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {


  date = new Date();
  animal: Animal = {
    espece: 'chien',
    sexe: 'm',
    nom: 'yuki',
    poid: 6,
    age: 3
  }

  constructor() { }

  ngOnInit(): void {
  }

}
