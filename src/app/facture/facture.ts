import { Produit } from '../products/produit';

export class Facture {
  _id: object;
  numfac: number;
  datefac: Date;
  somprix: number;
  client: object;
  devise: object;
  produits: Produit[];
  quantity: number;
}
