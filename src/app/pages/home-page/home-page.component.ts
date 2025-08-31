import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{
  ngOnInit(): void {
    if (this.slides.length) {
      // Clone first and last slides for infinite loop effect
      this.slides = [
        this.slides[this.slides.length - 1],
        ...this.slides,
        this.slides[0]
      ];
    }
    this.startAutoSlide();
  }
  slides = [
    { id: 1, image: 'assets/images/banner1.png', title: 'Slide One' }, { id: 2, image: 'assets/images/banner3.webp', title: 'Slide Two' }, { id: 3, image: 'assets/images/banner5.webp', title: 'Slide Three' }
  ]; 
  currentIndex:number = 0;
  transitionEnabled:boolean = false;
  autoSlideInterval: any;

  //************************ */ Carousel functionality********************************
  next = () => {
    if (this.currentIndex >= this.slides.length - 1) return; // Avoid overflow
  
    this.currentIndex++;
  
    if (this.currentIndex === this.slides.length - 1) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentIndex = 1; // Reset to first real slide without animation
      }, 500);
      setTimeout(() => {
        this.transitionEnabled = true;
      }, 550);
    }
  }
  
  prev = () => {
    if (this.currentIndex <= 0) return; // Avoid underflow
  
    this.currentIndex--;
  
    if (this.currentIndex === 0) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentIndex = this.slides.length - 2; // Reset to last real slide without animation
      }, 500);
      setTimeout(() => {
        this.transitionEnabled = true;
      }, 550);
    }
}
startAutoSlide = () => {
  this.autoSlideInterval = setInterval(() => {
    this.next();
  }, 3000); // 3 seconds interval
}

}




