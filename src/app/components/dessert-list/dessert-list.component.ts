import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DessertItemComponent } from '../dessert-item/dessert-item.component';

@Component({
  selector: 'app-dessert-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, DessertItemComponent],
  templateUrl: './dessert-list.component.html',
  styleUrls: ['./dessert-list.component.css'],
})
export class DessertListComponent {
  desserts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data.json').subscribe((data: any[]) => {
      this.desserts = data;
      console.log('✅', this.desserts);
    });
  }
}
