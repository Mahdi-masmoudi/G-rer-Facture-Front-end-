import { Component, OnInit } from '@angular/core';
import { FactureService } from '../facture.service';
import { Facture } from '../facture';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent implements OnInit {
  constructor(public factureService: FactureService) {}
  factures: any;
  ngOnInit(): void {
    this.factureService.getAll().subscribe((data: Facture[]) => {
      this.factures = data;
    });
  }
  deleteProduct(_id: object) {
    this.factureService.delete(_id).subscribe((res) => {
      this.factures = this.factures.filter(
        (item: { _id: object }) => item._id !== _id
      );
      console.log('Post deleted successfully!');
    });
  }
}
