import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: '786543',
      name: 'T-Shirt',
      type: 'Garment',
      color: 'Blue',
      price: 9.99,
    },
    {
      id: '786544',
      name: 'Iphone 14 Pro',
      type: 'Mobile',
      color: 'Gold',
      price: 1499,
    },
    {
      id: '786545',
      name: 'Iphone 13 Pro',
      type: 'Mobile',
      color: 'White',
      price: 1299,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
