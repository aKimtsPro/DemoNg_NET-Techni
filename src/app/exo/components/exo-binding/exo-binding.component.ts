import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo-binding',
  templateUrl: './exo-binding.component.html',
  styleUrls: ['./exo-binding.component.scss']
})
export class ExoBindingComponent implements OnInit {

  color: 'red' | 'green' | 'blue' = 'red';

  constructor() { }

  ngOnInit(): void {
  }

}
