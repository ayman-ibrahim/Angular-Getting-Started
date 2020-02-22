import { Component } from '@angular/core';
import { ProductService } from './Products/product.service';

@Component({
  providers: [ProductService],
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Achm Product Management';
}
