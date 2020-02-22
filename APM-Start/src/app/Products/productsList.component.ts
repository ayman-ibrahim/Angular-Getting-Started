
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../dataModels/IProduct';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './productsList.component.html',
  styleUrls: ['./productlist.component.css'],
})

export class ProductListComponent implements OnInit {
 
  pageTitle = "Product List";
  imageSize = 48;
  imageMargin = 2;
  showImage = false;
  
  filteredProducts: IProduct[];
  //
  products: IProduct[] = [];
  productService: ProductService;
  errorMessage: any;

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
  }

  constructor(private _service: ProductService) {
    this.productService = _service
  }


  _listFilter = 'cart';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;
  }

  performFilter(filteredBy: string): IProduct[] {
    return this.products.filter((product: IProduct) => 
      product.productName.toLocaleLowerCase().indexOf(filteredBy) !== -1
    );
  }

  //
  toggleImage(): void {
    console.log("toggleImage");
    this.showImage = !this.showImage;
  }

  onNotifyRatingClicked(message: string): void {
    this.pageTitle = `Product List : ${message}`;
  }
}