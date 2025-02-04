import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Classic Aviator Pro', description: 'Men\'s classic aviator sunglasses.', price: 6.49, image: 'assets/images/aviator.jpg' },
    { id: 2, name: 'Urban Square Shades', description: 'Women\'s urban square sunglasses.', price: 5.77, image: 'assets/images/urban-square.jpg' },
    // Add more products as needed
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
