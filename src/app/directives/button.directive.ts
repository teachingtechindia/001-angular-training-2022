import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[atButton]',
})
export class ButtonDirective implements OnInit, AfterViewInit {
  @HostListener('mouseover')
  onMouseOver() {
    // this.elementRef.nativeElement.style.backgroundColor = 'red';
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('mouseout')
  onmouseleave() {
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // this.elementRef.nativeElement.classList.add('bg-blue-500');
    this.elementRef.nativeElement.classList.add('text-white');
    this.elementRef.nativeElement.classList.add('uppercase');
    this.elementRef.nativeElement.classList.add('px-4');
    this.elementRef.nativeElement.classList.add('py-2');
    this.elementRef.nativeElement.classList.add('border-2');
    this.elementRef.nativeElement.classList.add('border-red-300');
    this.elementRef.nativeElement.classList.add('shadow-lg');
    this.elementRef.nativeElement.classList.add('rounded-xl');

    console.log(this.elementRef.nativeElement);
  }

  ngOnInit() {}
}
