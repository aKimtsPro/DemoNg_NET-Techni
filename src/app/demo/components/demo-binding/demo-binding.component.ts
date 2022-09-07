import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-binding',
  templateUrl: './demo-binding.component.html',
  styleUrls: ['./demo-binding.component.scss']
})
export class DemoBindingComponent implements OnInit {

  nom: string = 'Elvis';
  classe: string = 'ma-classe';

  constructor() { }

  ngOnInit(): void {
  }

}
