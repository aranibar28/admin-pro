import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexCustomerComponent } from './pages/index-customer/index-customer.component';
import { CreateCustomerComponent } from './pages/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';

@NgModule({
  declarations: [
    IndexCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
  ],
  imports: [CommonModule],
})
export class CustomersModule {}
