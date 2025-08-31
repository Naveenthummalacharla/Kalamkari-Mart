import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { Router,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  constructor(){
    const hiddenRoutes = ['/login', '/register','/forget'];

    // Set immediately based on current URL
    this.showHeaderFooter = !hiddenRoutes.includes(this.router.url);
  
    // Then listen for route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeaderFooter = !hiddenRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
  private router = inject(Router)
  showHeaderFooter:boolean = true;
}
