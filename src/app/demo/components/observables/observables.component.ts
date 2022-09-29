import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  obs$: Observable<number> = new Observable<number>(subscriber => {
    for (let i = 0; i < 5; i++) {
      subscriber.next(i);
    }
  });

  constructor() { }

  ngOnInit(): void {
    this.obs$.subscribe( truc => console.log('emission: ' + truc) );
    this.obs$.subscribe( truc => console.log('emission2: ' + truc) );
  }

}
