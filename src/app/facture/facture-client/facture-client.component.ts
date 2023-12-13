import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FactureService } from '../facture.service';

@Component({
  selector: 'app-facture-client',
  templateUrl: './facture-client.component.html',
  styleUrl: './facture-client.component.css',
})
export class FactureClientComponent {
  factures: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private clientService: FactureService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const clientId = params['id']; // assuming your route has a parameter named 'id'
      if (clientId) {
        this.loadFacturesByClientId(clientId);
      }
    });
  }

  loadFacturesByClientId(clientId: number): void {
    this.clientService.getFacturesByClientId(clientId).subscribe(
      (data) => {
        this.factures = data;
      },
      (error) => {
        console.error('Error fetching factures:', error);
      }
    );
  }
}
