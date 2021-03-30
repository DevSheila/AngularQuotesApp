import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightQuoteDirective]'
})

export class HighlightQuoteDirectiveDirective {

 
  
  constructor(private elem:ElementRef) { 
  }
 
  @HostListener("click") onClicks(){
    this.textDeco("yellow")
  }

 
  private textDeco(action:string){
    this.elem.nativeElement.parentNode.parentNode.parentNode.style.background=action;

  
  }

}
