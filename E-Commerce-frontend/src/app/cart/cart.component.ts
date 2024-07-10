// import { Component, OnInit } from '@angular/core';
// import { CartService } from './cart.service';
// import { CartItem } from './models/cart-item.model';
// import { Product } from './models/product.model';
// import { Discount } from './models/discount.model';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   cartItems: CartItem[] = [];
//   products: Product[] = [];
//   discountCode: string = '';
//   totalValue: number = 0;

//   constructor(private cartService: CartService) {}

//   ngOnInit(): void {
//     this.loadCartData();
//   }

//   loadCartData(): void {
//     this.cartService.getCartItems().subscribe(items => this.cartItems = items);
//     this.cartService.getProducts().subscribe(products => this.products = products);
//   }

//   applyDiscount(): void {
//     this.cartService.applyDiscount(this.discountCode).subscribe(
//       total => this.totalValue = total,
//       error => alert('Invalid discount code')
//     );
//   }

//   calculateTotal(): void {
//     this.cartService.applyDiscount('').subscribe(total => this.totalValue = total);
//   }

//   getProductName(productId: number): string {
//     const product = this.products.find(p => p.productID === productId);
//     return product ? product.name : '';
//   }
// }
