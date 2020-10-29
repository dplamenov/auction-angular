import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {CreateComponent} from './product/create/create.component';
import {LatestComponent} from './product/latest/latest.component';
import {AuthGuard} from './auth.guard';
import {ProductDetailsComponent} from './product/product-details/product-details.component';

const routes: Routes = [
  {path: '', component: LatestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'product', children: [
      {path: 'create', component: CreateComponent, canActivate: [AuthGuard]},
      {path: ':productId', component: ProductDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
