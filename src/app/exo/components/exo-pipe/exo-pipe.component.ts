import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo-pipe',
  templateUrl: './exo-pipe.component.html',
  styleUrls: ['./exo-pipe.component.scss']
})
export class ExoPipeComponent implements OnInit {

  secondes = 0;
  id?: number;

  constructor() { }

  ngOnInit(): void {
  }

  play(){
    if( !this.id )
      this.id = window.setInterval(()=>{this.secondes++}, 1000)
  }

  pause() {
    if( this.id ){
      clearInterval(this.id);
      this.id = undefined;
    }
  }

  reset(){
    if( !this.id )
      this.secondes = 0;
  }

}
