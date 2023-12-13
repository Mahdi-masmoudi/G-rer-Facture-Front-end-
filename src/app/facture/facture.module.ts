import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactureRoutingModule } from './facture-routing.module';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FactureClientComponent } from './facture-client/facture-client.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [CreateComponent, FactureClientComponent, IndexComponent],
  imports: [
    CommonModule,
    FactureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class FactureModule {}
