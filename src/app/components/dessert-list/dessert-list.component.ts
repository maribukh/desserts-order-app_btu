import { Component } from '@angular/core';
import { DessertItemComponent } from '../dessert-item/dessert-item.component';

@Component({
  selector: 'app-dessert-list',
  imports: [DessertItemComponent],
  templateUrl: './dessert-list.component.html',
  styleUrl: './dessert-list.component.css',
})
export class DessertListComponent {}
