import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateComponent} from './create/create.component';
import {AuthGuard} from '../auth.guard';
import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Routes = [
  {path: 'create', component: CreateComponent, canActivate: [AuthGuard]},
  {path: ':productId', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
