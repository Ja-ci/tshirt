import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Classic Cotton Tee', description: 'Men\'s classic cotton T-shirt.', price: 649, image: 'assets/Images/t-shirt1.png' },
    { id: 2, name: 'Urban Fit Tee', description: 'Women\'s urban-style fitted T-shirt.', price: 577, image: 'assets/Images/t-shirt2.png' },
    { id: 3, name: 'Sporty Dry-Fit Tee', description: 'Unisex sporty moisture-wicking T-shirt.', price: 799, image: 'assets/Images/t-shirt3.jpg' },
    { id: 4, name: 'Vintage Graphic Tee', description: 'Retro-style graphic print T-shirt.', price: 625, image: 'assets/Images/t-shirt4.png' },
    { id: 5, name: 'Luxury Polo Tee', description: 'Elegant polo-style T-shirt.', price: 850, image: 'assets/Images/t-shirt5.jpg' },
    { id: 6, name: 'Premium V-Neck Tee', description: 'High-quality cotton V-neck T-shirt.', price: 999, image: 'assets/Images/t-shirt6.jpg' },
    { id: 7, name: 'Stylish Crop Tee', description: 'Trendy cropped T-shirt for women.', price: 675, image: 'assets/Images/t-shirt7.jpg' },
    { id: 8, name: 'Casual Oversized Tee', description: 'Comfortable oversized T-shirt.', price: 725, image: 'assets/Images/t-shirt8.jpg' },
    { id: 9, name: 'Futuristic Print Tee', description: 'Bold printed T-shirt with a modern design.', price: 1099, image: 'assets/Images/t-shirt9.jpg' },
    { id: 10, name: 'Minimalist Pocket Tee', description: 'Simple T-shirt with a stylish pocket.', price: 550, image: 'assets/Images/t-shirt10.jpg' },
    { id: 11, name: 'Luxury Embroidered Tee', description: 'Premium T-shirt with embroidered logo.', price: 1125, image: 'assets/Images/t-shirt11.jpg' },
    { id: 12, name: 'Soft Touch Henley Tee', description: 'Ribbed Henley T-shirt with buttons.', price: 975, image: 'assets/Images/t-shirt12.jpg' },
    { id: 13, name: 'Retro Band Tee', description: 'Classic rock band T-shirt.', price: 699, image: 'assets/Images/t-shirt13.jpg' },
    { id: 14, name: 'Gradient Color Tee', description: 'Gradient-dyed stylish T-shirt.', price: 849, image: 'assets/Images/t-shirt14.jpg' },
    { id: 15, name: 'Graphic Streetwear Tee', description: 'Streetwear-inspired graphic T-shirt.', price: 799, image: 'assets/Images/t-shirt15.jpg' },
    { id: 16, name: 'Slim Fit Long Tee', description: 'Slim fit extended-length T-shirt.', price: 699, image: 'assets/Images/t-shirt16.jpg' },
    { id: 17, name: 'Tie-Dye Festival Tee', description: 'Colorful tie-dye festival T-shirt.', price: 950, image: 'assets/Images/t-shirt17.jpg' },
    { id: 18, name: 'Turtleneck Tee', description: 'Elegant turtleneck-style T-shirt.', price: 825, image: 'assets/Images/t-shirt18.jpg' },
    { id: 19, name: 'Eco-Friendly Bamboo Tee', description: 'Sustainable bamboo fabric T-shirt.', price: 1299, image: 'assets/Images/t-shirt19.jpg' }

    // Add more products as needed
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
