import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateComponent} from './create/create.component';
import {AuthGuard} from '../shared/guards/auth.guard';
import {DetailsComponent} from './details/details.component';
import {AllComponent} from './all/all.component';
import {LatestComponent} from './latest/latest.component';
import {EditComponent} from './edit/edit.component';
import {OwnerGuard} from '../shared/guards/owner.guard';

const routes: Routes = [
  {path: 'latest', component: LatestComponent},
  {path: 'create', component: CreateComponent, canActivate: [AuthGuard]},
  {path: 'all', component: AllComponent},
  {path: ':productId', component: DetailsComponent},
  {path: ':productId/edit', component: EditComponent, canActivate: [AuthGuard, OwnerGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
