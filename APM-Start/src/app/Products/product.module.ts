import { NgModule } from '@angular/core';
import { ProductListComponent } from './productsList.component';
import { ConvertToSpacesPipe } from '../shared/convertToSpace.pipe';
import { ProductDetailsComponent } from './product-details.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailsComponent, canActivate: [ProductGuardService] },
    ]),
    SharedModule
  ],
  providers: [ProductService, ProductGuardService]
})
export class ProductModule { }
