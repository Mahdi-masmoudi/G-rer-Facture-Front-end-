import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Detailproducts } from '../detailproducts';
import { DetailproductsService } from '../detailproducts.service';
import { ProductsService } from '../../products/products.service';
import { Produit } from '../../products/produit';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'], // Correction ici
})
export class CreateComponent implements OnInit {
  constructor(
    public detailService: DetailproductsService,
    public productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.loadscategorie();
  }

  display = 'none';
  products!: Produit[];
  Detail: Detailproducts = new Detailproducts();

  @ViewChild('myModal') myModal!: ElementRef;

  create() {
    this.detailService.create(this.Detail).subscribe(
      (data) => {
        console.log(data);
        window.location.reload();
      },
      (error) => {
        console.error('Erreur lors de la création : ', error);
        // Traitez l'erreur ici
      }
    );
  }

  loadscategorie() {
    this.productsService.getAll().subscribe(
      (data) => (this.products = data),
      (error: any) => console.log(error)
    );
  }

  openModal() {
    this.display = 'block';
  }

  closeModal() {
    this.display = 'none';
  }
}
