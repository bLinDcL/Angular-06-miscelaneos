import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') color: string;

  constructor( private elementRef: ElementRef) {
    console.log('Directiva llamada');
    // elementRef.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseenter') mouseEnter() {
    this.resaltar( this.color || "yellow" );
  }

  @HostListener('mouseleave') mouseLeave() {
    this.resaltar( null );
  }

  private resaltar(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
