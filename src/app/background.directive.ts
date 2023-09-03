import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
  @Input() appBackground = 0;
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'white';
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.appBackground % 2 === 0) {
      this.el.nativeElement.style.backgroundColor = 'red';
    } else {
      this.el.nativeElement.style.backgroundColor = 'whitesmoke';
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'whitesmoke';
  }
}
