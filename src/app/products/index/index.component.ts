import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service';
import { Produit } from '../produit';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  constructor(public productsService: ProductsService) {}
  products: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  ngOnInit(): void {
    this.productsService.getAll().subscribe((data: Produit[]) => {
      this.products = data;
    });
  }
  selectedProduct: any; // To store the selected product

  selectProduct(product: any) {
    this.selectedProduct = product;
  }
  deleteProduct(_id: object) {
    this.productsService.delete(_id).subscribe((res) => {
      this.products = this.products.filter(
        (item: { _id: object }) => item._id !== _id
      );
      console.log('Post deleted successfully!');
    });
  }
}
