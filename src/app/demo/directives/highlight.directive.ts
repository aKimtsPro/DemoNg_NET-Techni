import { NgClass } from '@angular/common';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[demoHighlight]'
})
export class HighlightDirective {

  private readonly _element: HTMLElement;
  private _isYellow = true

  constructor(ref: ElementRef) {
    this._element = ref.nativeElement as HTMLElement;
    this._element.style.backgroundColor = 'yellow';
  }

  @HostListener('click')
  onClick(){
    this._element.style.backgroundColor = this._isYellow ? 'green' : 'yellow';
    this._isYellow = !this._isYellow;
  }

}
