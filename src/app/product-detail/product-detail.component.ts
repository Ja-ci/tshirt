import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

declare var paypal: any;

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  orderForm!: FormGroup;
  

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(productId);

    // Initialize form with validation
    this.orderForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });

    this.loadPayPal();
  }

  
  loadPayPal() {
    if (!this.product) return;
  
  paypal.Buttons({
    createOrder: (data: any, actions: any) => {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: this.product?.price
          }
        }]
      });
    },
    onApprove: async (data: any, actions: any) => {
      const order = await actions.order.capture();
      console.log('Payment Successful', order);
      this.sendEmail(); // Send order email after successful payment
      alert('Payment Successful! Your order has been placed.');
    },
    onError: (err: any) => {
      console.error('PayPal Error', err);
      alert('Payment failed. Please try again.');
    }
  }).render('#paypal-button-container');
  }

  placeOrder() {
    if (this.orderForm.valid) {
      console.log('Order Placed:', this.orderForm.value);
    }
  }

  sendEmail() {
    if (this.orderForm.valid && this.product) {
      const firstName = this.orderForm.value.firstName;
      const lastName = this.orderForm.value.lastName;
      const email = this.orderForm.value.email;
      const phone = this.orderForm.value.phone;
      const productName = this.product.name;
      const productPrice = this.product.price;

      const subject = `New Order: ${productName}`;
      const body = `Name: ${firstName} ${lastName}%0A
                    Email: ${email}%0A
                    Phone: ${phone}%0A
                    Product: ${productName}%0A
                    Price: $${productPrice}`;

      const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;

      window.location.href = mailtoLink;
    } else {
      alert("Please fill in all fields before placing an order.");
    }
  }

}
