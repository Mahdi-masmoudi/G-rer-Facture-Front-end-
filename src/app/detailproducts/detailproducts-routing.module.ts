import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: 'detailproducts',
    redirectTo: 'detailproducts/index',
    pathMatch: 'full',
  },
  { path: 'detailproducts/index', component: IndexComponent },
  { path: 'detailproducts/create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailproductsRoutingModule {}
