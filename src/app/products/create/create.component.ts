import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent implements OnInit {
  products: Produit = new Produit();
  display = 'none';

  constructor(private prodserv: ProductsService) {}
  ngOnInit() {}

  ajoutarticle = () => {
    this.prodserv.create(this.products).subscribe((data) => {
      console.log(data);
      console.log(10);
      this.closeModal();
      window.location.reload();
    });
  };
  openModal() {
    this.display = 'block';
  }
  closeModal() {
    this.display = 'none';
  }
}
