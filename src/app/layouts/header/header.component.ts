import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

 constructor(){}
 private router = inject(Router)
 ngOnInit() {
  
}

 Login = ()=>{
  this.router.navigate(['login'])
 }

}
