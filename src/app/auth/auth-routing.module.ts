import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recover', component: RecoverComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

/* 

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recover', component: RecoverComponent },

{
  path: '',
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: '**', redirectTo: 'login' },
  ],
}

*/
