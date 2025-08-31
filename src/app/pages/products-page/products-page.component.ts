import { Component,inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ProductsService } from '../../services/products_Service/products.service';
@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
     MatIcon
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent implements OnInit{
  ngOnInit(): void {
    this.getAllProducts();
  }
  productService = inject(ProductsService);

  Products:any[] = [];

  getAllProducts = ()=>{
    this.productService.getAllSaries().subscribe((res)=>{
     this.Products = res;
     console.log(this.Products)
    })
  }
}
