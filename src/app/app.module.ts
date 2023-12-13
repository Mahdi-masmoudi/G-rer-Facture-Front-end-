import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailproductsModule } from './detailproducts/detailproducts.module';
import { FactureModule } from './facture/facture.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DetailproductsModule,
    FactureModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
