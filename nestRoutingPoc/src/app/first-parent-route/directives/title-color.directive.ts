import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appTitleColor]'
})
export class TitleColorDirective implements OnInit {
  @Input()
  backgroundColor: string;
  @Input()
  isCheckMark: boolean;
  previousElement: HTMLElement;
  constructor(private eleRef: ElementRef) {}
  ngOnInit() {
    const element: HTMLElement = <HTMLElement>this.eleRef.nativeElement;
    element.style.backgroundColor = this.backgroundColor;
  }
  // @HostListener('mouseover')
  // onmouseenter() {
  //   const eleRef: HTMLElement = <HTMLElement>this.eleRef.nativeElement;
  //   console.log(
  //     eleRef.parentElement.parentElement.parentElement.parentElement
  //       .parentElement.parentElement.parentElement
  //   );
  // }
}
