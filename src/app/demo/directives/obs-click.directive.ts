import { Directive, ElementRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Directive({
  selector: '[appObsClick]'
})
export class ObsClickDirective {

  obs$!: Observable<any>; // Observable à chaud

  constructor(elementRef: ElementRef) { 
    this.obs$ = fromEvent(elementRef.nativeElement, 'click')
  }

}
