import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { NavigationExtras, Router } from '@angular/router';

import { logo } from '../../logo';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', animate('500ms')),
      transition('hidden => visible', animate('500ms')),
    ]),
  ],
})
export class PrincipalComponent {
  imagePath: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private elementRef: ElementRef
  ) {
    this.imagePath = '';
  }
  ngAfterViewInit() {
    const container = this.elementRef.nativeElement.querySelector('#container');

    const threeJSUtils = new logo(container);
    threeJSUtils.init();
  }
  contents = ['A', 'B', 'C'];
  currentContent = 'A';

  navigate(direction: string) {
    const currentIndex = this.contents.indexOf(this.currentContent);
    if (direction === 'left') {
      const newIndex =
        (currentIndex - 1 + this.contents.length) % this.contents.length;
      this.currentContent = this.contents[newIndex];
    } else if (direction === 'right') {
      const newIndex = (currentIndex + 1) % this.contents.length;
      this.currentContent = this.contents[newIndex];
    }
  }
  profil() {
    this.router.navigate(['/profil']);
  }
  contact() {
    this.router.navigate(['/contact']);
  }
  projet() {
    this.router.navigate(['/projet']);
  }
}
