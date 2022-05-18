import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './account/pages/main/main.component';
import { MessagesComponent } from './account/pages/messages/messages.component';
import { ProfileComponent } from './account/pages/profile/profile.component';
import { SettingsComponent } from './account/pages/settings/settings.component';

import { CreateCustomerComponent } from './customers/pages/create-customer/create-customer.component';
import { IndexCustomerComponent } from './customers/pages/index-customer/index-customer.component';
import { UpdateCustomerComponent } from './customers/pages/update-customer/update-customer.component';

import { CreateProductComponent } from './products/pages/create-product/create-product.component';
import { IndexProductComponent } from './products/pages/index-product/index-product.component';
import { UpdateProductComponent } from './products/pages/update-product/update-product.component';

const childRoutes: Routes = [
  { path: '', component: MainComponent, data: { title: 'Dashboard' } },
  { path: 'profile', component: ProfileComponent, data: { title: 'Perfil' } },
  { path: 'messages', component: MessagesComponent, data: { title: 'Mensajes' } },
  { path: 'settings', component: SettingsComponent, data: { title: 'Configuración' } },

  { path: 'customers', component: IndexCustomerComponent, data: { title: 'Clientes' } },
  { path: 'customers/create', component: CreateCustomerComponent, data: { title: 'Crear' } },
  { path: 'customers/update', component: UpdateCustomerComponent, data: { title: 'Actualizar' } },

  { path: 'products', component: IndexProductComponent, data: { title: 'Productos' } },
  { path: 'products/create', component: CreateProductComponent, data: { title: 'Crear' } },
  { path: 'products/update', component: UpdateProductComponent , data: { title: 'Actualizar' }},

  { path: '**', redirectTo: '' }, 
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ChildRoutesModule {}
