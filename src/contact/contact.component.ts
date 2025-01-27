import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 
  @ViewChild('title1') title1!: ElementRef;
  @ViewChild('title2') title2!: ElementRef;
  @ViewChild('title3') title3!: ElementRef;
  @ViewChild('title4') title4!: ElementRef;


  showTitle(inputValue: string): void {
    if (inputValue.trim() !== "") {
      this.title1.nativeElement.classList.remove('befor-animate-title');
      this.title1.nativeElement.classList.add('animate-title');
    } else {
      this.title1.nativeElement.classList.add('befor-animate-title');
      this.title1.nativeElement.classList.remove('animate-title');
    }
  }
  showTitle2(input2Value: string): void {
    if (input2Value.trim() !== "") {
      this.title2.nativeElement.classList.remove('befor-animate-title');
      this.title2.nativeElement.classList.add('animate-title');
    } else {
      this.title2.nativeElement.classList.add('befor-animate-title');
      this.title2.nativeElement.classList.remove('animate-title');
    }
  }
  showTitle3(input3Value: string): void {
    if (input3Value.trim() !== "") {
      this.title3.nativeElement.classList.remove('befor-animate-title');
      this.title3.nativeElement.classList.add('animate-title');
    } else {
      this.title3.nativeElement.classList.add('befor-animate-title');
      this.title3.nativeElement.classList.remove('animate-title');
    }
  }
  showTitle4(input4Value: string): void {
    if (input4Value.trim() !== "") {
      this.title4.nativeElement.classList.remove('befor-animate-title');
      this.title4.nativeElement.classList.add('animate-title');
    } else {
      this.title4.nativeElement.classList.add('befor-animate-title');
      this.title4.nativeElement.classList.remove('animate-title');
    }
  }
}