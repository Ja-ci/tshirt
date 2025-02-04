import { Component } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-Tshirt';

  constructor(private router: Router) {
    // Subscribe to router events and handle scroll behavior
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = window.location.hash;
        if (fragment) {
          setTimeout(() => {
            const element = document.querySelector(fragment);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 0);
        }
      }
    });
  }
}
