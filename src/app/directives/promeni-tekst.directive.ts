import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPromeniTekst]'
})
export class PromeniTekstDirective {

  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText="Text is changed by changeText Directive. ";
   }

}
