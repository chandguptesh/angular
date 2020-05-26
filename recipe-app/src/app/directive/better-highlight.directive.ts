import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  

  constructor(private renderer:Renderer2, private elRef:ElementRef) { }
  ngOnInit(): void {
    
   // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','blue');
  }
  @HostBinding('style.backgroundColor') backgroundColorProperty = 'transparent';
  
  @HostListener('mouseleave')onMouseLeave(){
    //this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','transparent');
    this.backgroundColorProperty = 'transparent';
  }

  @HostListener('mouseenter')onMouseEnter(){
    //this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','blue');
    this.backgroundColorProperty = 'blue';
  }

 

}
