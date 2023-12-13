import { Component } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { FactureService } from '../facture.service';
import { Produit } from '../../products/produit';
import { Facture } from '../facture';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  constructor(
    private prodserv: ProductsService,
    private fact: FactureService
  ) {}
  facture: any = {
    produits: [],
    somprix: 0, // Initialisez la somme à zéro ou à une valeur initiale selon vos besoins
  };
  //facture: Facture = new Facture();
  products: Produit[];
  newProduct: string = ''; // For storing the value of the new product input

  factures = {
    numfac: null,
    datefac: null,
    somprix: 0,
    items: [{ produit: null, quantity: null }],
  };
  ngOnInit() {
    this.loadscategorie();
  }
  placeOrder(productId: number, quantityOrdered: number): void {
    this.prodserv.placeOrder(productId, quantityOrdered);
    // Autres logiques liées à la facturation
  }
  loadscategorie() {
    return (
      this.prodserv.getAll().subscribe((data) => (this.products = data)),
      (error: any) => console.log(error)
    );
  }

  ajoutFacture = () => {
    this.fact.create(this.facture).subscribe((data) => {
      console.log(data);
      console.log(10);
      window.location.reload();
    });
  };
  updateTotalAmount() {
    this.facture.somprix = this.facture.produits.reduce(
      (total: number, product: { prix: number; quantity: number }) => {
        return total + (product.quantity || 0) * product.prix;
      },
      0
    );
  }

  // updateTotalAmount() {
  //   this.facture.somprix = this.facture.produits.reduce(
  //     (total: number, product: { prix: number; quantity: number }) => {
  //       return total + (this.facture.quantity || 0) * product.prix;
  //     },
  //     0
  //   );
  // }

  addProduct() {
    if (this.newProduct.trim() !== '') {
      const product = {
        designation: this.newProduct,
        prix: null, // You may want to add logic for setting the price
        quantity: null, // You may want to add logic for setting the quantity
      };
    }
  }

  getnumFac(): void {
    const numfac = 1 + this.facture.numfac;
    this.facture.numfac = numfac;
  }
  getCurrentDate(): void {
    const currentDate = new Date();
    currentDate.setUTCHours(
      currentDate.getUTCHours() + 1,
      currentDate.getUTCMinutes(),
      0,
      0
    );
    const formattedDate = currentDate.toISOString().slice(0, 16);
    this.facture.datefac = formattedDate;
  }
}
