import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexProductComponent } from './pages/index-product/index-product.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';

@NgModule({
  declarations: [
    IndexProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
  ],
  imports: [CommonModule],
})
export class ProductsModule {}
