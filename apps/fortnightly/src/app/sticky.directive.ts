import { Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[mscSticky]',
})
export class StickyDirective implements OnInit {
  el = this.elRef.nativeElement;

  constructor(
    private elRef: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    if (this.el) {
      this.document.addEventListener('scroll', () => {
        document
          .querySelectorAll('[mscSticky]')
          .forEach((e: HTMLElement, index) => {
            if (
              window.pageYOffset > 0 &&
              !e.classList.contains('sticky-menu') &&
              !e.classList.contains('sticky-tab')
            ) {
              index === 0
                ? e.classList.add('sticky-menu')
                : e.classList.add('sticky-tab');
            }
            if (window.pageYOffset === 0) {
              index === 0
                ? e.classList.remove('sticky-menu')
                : e.classList.remove('sticky-tab');
            }
          });
      });
    }
  }
}
