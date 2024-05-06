import { Component, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
       <div>
         <div class="container">
            <button class="btn btn-danger mt-3" (click)="getProducts()">Products</button>
         </div>
         <div class="container" *ngIf="products">
           <div class="product-tile" *ngFor="let product of products; let i = index">
             <img src="">
             <div class="product-details">
                <h2 class="product-title">{{product.title}}</h2>
                <p class="product-price">Price : ₹{{product.price}}</p>
                <details>
                   <p class="product-color">Color : {{product.color}}</p>
                   <p class="product-category">Category : {{product.categories}}</p>
                   <p class="product-desc">Desc : {{product.desc}}</p>
                   <p class="product-size">Size : {{product.size}}</p>
                   <p class="product-quantity">Quantity : {{product.quantity}}</p>
                </details>
             </div>
           </div>
         </div>
      </div>

  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  private productSrv = inject(ProductService);

  products: Product[] = [];
  showDetails: boolean=true;
  constructor() { }

  getProducts() {
    this.productSrv.getData().subscribe((response: any) => {
      this.products = response;
      console.log("products : ", response);
      
  })
  }

}

