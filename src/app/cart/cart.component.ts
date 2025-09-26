import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getCart();
    this.total = this.cartService.getTotal();

    this.cartService.cart$.subscribe(cart => {
      this.items = cart;
      this.total = this.cartService.getTotal();
    });
  }

  get totalItems(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  removeItem(id: string | number) {
    this.cartService.removeItem(id);
  }

  trackById(_: number, item: CartItem) {
    return item.id;
  }
}
