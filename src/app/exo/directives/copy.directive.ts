import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective {

  private _element: HTMLElement

  constructor(ref: ElementRef) {
    this._element = ref.nativeElement;
  }

  @HostListener('click')
  click(){
    const copy = this._element.cloneNode(true);
    (copy as HTMLElement).style.backgroundColor = 'red';
    copy.addEventListener('click', () => copy.parentElement?.removeChild(copy) )
    this._element.parentNode?.insertBefore(copy, this._element.nextSibling)
  }

}
