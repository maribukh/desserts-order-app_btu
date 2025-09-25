import { Component } from '@angular/core';
import { DessertListComponent } from '../../components/dessert-list/dessert-list.component';

@Component({
  selector: 'app-desserts-page',
  imports: [DessertListComponent],
  templateUrl: './desserts-page.component.html',
  styleUrl: './desserts-page.component.css',
})
export class DessertsPageComponent {}
