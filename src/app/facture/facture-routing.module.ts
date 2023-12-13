import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { FactureClientComponent } from './facture-client/facture-client.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'clients/:id/factures', component: FactureClientComponent },
  { path: 'facture/create', component: CreateComponent },
  { path: 'facture/index', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactureRoutingModule {}
