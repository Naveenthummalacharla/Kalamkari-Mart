import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    MatInput
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  data = {
  "id": "1",
  "name": "Kalamkari Silk",
  "description": "Casual saree women daily wear cotton, party wear cotton silk saree, wedding sarees, soft silk saree, plain silk saree, kanjivaram silk saree, gadwal silk, jamdani, khadi, uppada, banarasi and other 2024 designs for women daily use.",
  "material": "Silk",
  "pattern": "Woven",
  "occasion": "Wedding & Festive, Party & Festive",
  "borders": "Up: 2-3 inches; Lower: 4-5 inches copper zari borders",
  "blouse": "Magenta colour blouse",
  "fabric": "Semi pattu (Bangalore silk)",
  "color": "Magenta with zari weaved brocade",
  "washcare": "Immense diligence is required at every stage to preserve grandeur of silk. First wash is Dry-clean. After care: soft/water polish can be considered.",
  "productImg1": "https://gayathrisarees.com/cdn/shop/files/112_c22c642b-b0fc-4b9e-b888-e43a29d8351f_600x.jpg?v=1687589984",
  "productImg2": "https://gayathrisarees.com/cdn/shop/files/113_c371f4ca-d65a-4b6e-abc8-2028b2c125dc_600x.jpg?v=1687589984",
  "productImg3": "https://gayathrisarees.com/cdn/shop/files/114_bfb9d228-9518-4bed-ae47-9cf30ce3e058_600x.jpg?v=1687589984",
  "productImg4": "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/z/u/w/free-sarees-new2022-design-simple-sarees-2022-kanjivaram-saree-original-imagwysyjbp9fhx2.jpeg?q=70&crop=false",
  "productImg5": "https://rukminim2.flixcart.com/image/832/832/ksuowi80/shopsy-sari/n/r/s/free-vsm-307-vinayaka-silk-mills-unstitched-original-imag6bzcxarxsffh.jpeg?q=70&crop=false",
  "productImg6": "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/h/8/e/free-abc123-geetaba-fashion-unstitched-original-imagnf72zg9majs6.jpeg?q=70&crop=false",
  "sarilength": "20CM",
  "SalePrice": 500,
  "PurchasePrice": 1000,
  "Unitprice": 500,
  "disscount": "200",
  "stock_quantity": 10,
  "category_id": 25,
  "deliveryTimeSpan": "2-3 Days",
  "itemqty": 1,
  "created_at": "",
  "updated_at": ""
}
 images = [
  "https://gayathrisarees.com/cdn/shop/files/112_c22c642b-b0fc-4b9e-b888-e43a29d8351f_600x.jpg?v=1687589984",
  "https://gayathrisarees.com/cdn/shop/files/113_c371f4ca-d65a-4b6e-abc8-2028b2c125dc_600x.jpg?v=1687589984",
  "https://gayathrisarees.com/cdn/shop/files/114_bfb9d228-9518-4bed-ae47-9cf30ce3e058_600x.jpg?v=1687589984",
  "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/z/u/w/free-sarees-new2022-design-simple-sarees-2022-kanjivaram-saree-original-imagwysyjbp9fhx2.jpeg?q=70&crop=false",
  "https://rukminim2.flixcart.com/image/832/832/ksuowi80/shopsy-sari/n/r/s/free-vsm-307-vinayaka-silk-mills-unstitched-original-imag6bzcxarxsffh.jpeg?q=70&crop=false",
  "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/h/8/e/free-abc123-geetaba-fashion-unstitched-original-imagnf72zg9majs6.jpeg?q=70&crop=false",
    "https://gayathrisarees.com/cdn/shop/files/112_c22c642b-b0fc-4b9e-b888-e43a29d8351f_600x.jpg?v=1687589984",
  "https://gayathrisarees.com/cdn/shop/files/113_c371f4ca-d65a-4b6e-abc8-2028b2c125dc_600x.jpg?v=1687589984",
  "https://gayathrisarees.com/cdn/shop/files/114_bfb9d228-9518-4bed-ae47-9cf30ce3e058_600x.jpg?v=1687589984",
  "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/z/u/w/free-sarees-new2022-design-simple-sarees-2022-kanjivaram-saree-original-imagwysyjbp9fhx2.jpeg?q=70&crop=false",
  "https://rukminim2.flixcart.com/image/832/832/ksuowi80/shopsy-sari/n/r/s/free-vsm-307-vinayaka-silk-mills-unstitched-original-imag6bzcxarxsffh.jpeg?q=70&crop=false",
  "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/h/8/e/free-abc123-geetaba-fashion-unstitched-original-imagnf72zg9majs6.jpeg?q=70&crop=false"
];

}
