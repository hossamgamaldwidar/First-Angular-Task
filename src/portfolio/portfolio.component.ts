import { log } from 'node:console';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  constructor() { }

  images = [
    { src: './Imges/poert1.png', alt: 'Image 1' },
    { src: './Imges/port2.png', alt: 'Image 2' },
    { src: './Imges/port3.png', alt: 'Image 3' },
    { src: './Imges/poert1.png', alt: 'Image 1' },
    { src: './Imges/port2.png', alt: 'Image 2' },
    { src: './Imges/port3.png', alt: 'Image 3' },
  ];

  @ViewChild('popup') popup!: ElementRef;
  @ViewChild('imgPopUp') imgPopUp!: ElementRef;
  @ViewChildren('image') imageElements!: QueryList<ElementRef>;
  imgSrcAfter:string="";
  imageSrc(event: Event): void {
    let target = event.currentTarget as HTMLElement;
    let imgElement = target.querySelector('img') as HTMLImageElement;
    this.imgSrcAfter=imgElement.src;
    this.popup.nativeElement.classList.remove('d-none');
  }
  closePopup(event: Event): void {
    let imgTarget = event.target as HTMLElement;
    if (!imgTarget.closest('img')) {
      this.popup.nativeElement.classList.add('d-none');
    }
  }

}