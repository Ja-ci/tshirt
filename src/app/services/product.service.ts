import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Classic Cotton Tee', description: 'Men\'s classic cotton T-shirt.', price: 6.49, image: 'assets/Images/t-shirt1.png' },
    { id: 2, name: 'Urban Fit Tee', description: 'Women\'s urban-style fitted T-shirt.', price: 5.77, image: 'assets/Images/t-shirt2.png' },
    { id: 3, name: 'Sporty Dry-Fit Tee', description: 'Unisex sporty moisture-wicking T-shirt.', price: 7.99, image: 'assets/Images/t-shirt3.jpg' },
    { id: 4, name: 'Vintage Graphic Tee', description: 'Retro-style graphic print T-shirt.', price: 6.25, image: 'assets/Images/t-shirt4.png' },
    { id: 5, name: 'Luxury Polo Tee', description: 'Elegant polo-style T-shirt.', price: 8.50, image: 'assets/Images/t-shirt5.jpg' },
    { id: 6, name: 'Premium V-Neck Tee', description: 'High-quality cotton V-neck T-shirt.', price: 9.99, image: 'assets/Images/t-shirt6.jpg' },
    { id: 7, name: 'Stylish Crop Tee', description: 'Trendy cropped T-shirt for women.', price: 6.75, image: 'assets/Images/t-shirt7.jpg' },
    { id: 8, name: 'Casual Oversized Tee', description: 'Comfortable oversized T-shirt.', price: 7.25, image: 'assets/Images/t-shirt8.jpg' },
    { id: 9, name: 'Futuristic Print Tee', description: 'Bold printed T-shirt with a modern design.', price: 10.99, image: 'assets/Images/t-shirt9.jpg' },
    { id: 10, name: 'Minimalist Pocket Tee', description: 'Simple T-shirt with a stylish pocket.', price: 5.50, image: 'assets/Images/t-shirt10.jpg' },
    { id: 11, name: 'Luxury Embroidered Tee', description: 'Premium T-shirt with embroidered logo.', price: 11.25, image: 'assets/Images/t-shirt11.jpg' },
    { id: 12, name: 'Soft Touch Henley Tee', description: 'Ribbed Henley T-shirt with buttons.', price: 9.75, image: 'assets/Images/t-shirt12.jpg' },
    { id: 13, name: 'Retro Band Tee', description: 'Classic rock band T-shirt.', price: 6.99, image: 'assets/Images/t-shirt13.jpg' },
    { id: 14, name: 'Gradient Color Tee', description: 'Gradient-dyed stylish T-shirt.', price: 8.49, image: 'assets/Images/t-shirt14.jpg' },
    { id: 15, name: 'Graphic Streetwear Tee', description: 'Streetwear-inspired graphic T-shirt.', price: 7.99, image: 'assets/Images/t-shirt15.jpg' },
    { id: 16, name: 'Slim Fit Long Tee', description: 'Slim fit extended-length T-shirt.', price: 6.99, image: 'assets/Images/t-shirt16.jpg' },
    { id: 17, name: 'Tie-Dye Festival Tee', description: 'Colorful tie-dye festival T-shirt.', price: 9.50, image: 'assets/Images/t-shirt17.jpg' },
    { id: 18, name: 'Turtleneck Tee', description: 'Elegant turtleneck-style T-shirt.', price: 8.25, image: 'assets/Images/t-shirt18.jpg' },
    { id: 19, name: 'Eco-Friendly Bamboo Tee', description: 'Sustainable bamboo fabric T-shirt.', price: 12.99, image: 'assets/Images/t-shirt19.jpg' }

    // Add more products as needed
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
