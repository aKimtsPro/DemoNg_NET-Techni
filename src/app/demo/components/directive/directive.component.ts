import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  isSelected= true;
  color: string = 'red';
  display= true;

  tab: number[] = [1,2,3,4,5]

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelected() {
    this.isSelected = !this.isSelected;
  }

}
