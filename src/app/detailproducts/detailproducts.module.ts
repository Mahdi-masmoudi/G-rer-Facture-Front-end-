import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailproductsRoutingModule } from './detailproducts-routing.module';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [IndexComponent, CreateComponent],
  imports: [
    CommonModule,
    DetailproductsRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
  ],
})
export class DetailproductsModule {}
