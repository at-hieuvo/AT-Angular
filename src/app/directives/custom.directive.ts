import { Directive, AfterViewInit, Input, Output, OnInit, ElementRef } from '@angular/core';
@Directive({
  selector: '[emptyData]'
})

export class CustomDirective implements OnInit {
  @Input() emptyData: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (!this.emptyData) {
      this.el.nativeElement.innerHTML = 'Empty';
      this.el.nativeElement.style.color = "#c3c3c3";
    }
  }
}