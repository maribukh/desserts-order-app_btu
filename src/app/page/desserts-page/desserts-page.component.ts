import { Component } from '@angular/core';
import { DessertListComponent } from '../../components/dessert-list/dessert-list.component';
import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-desserts-page',
  templateUrl: './desserts-page.component.html',
  styleUrls: ['./desserts-page.component.css'],
  standalone: true,
  imports: [DessertListComponent, CartComponent]
})
export class DessertsPageComponent {}

