import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './productsList.component';
import { ConvertToSpacesPipe } from '../shared/convertToSpace.pipe';
import { StarComponent } from '../shared/star.componenet';
import { ProductDetailsComponent } from './product-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailsComponent, canActivate: [ProductGuardService] },
    ])
  ],
  providers: [ProductService, ProductGuardService]
})
export class ProductModule { }
