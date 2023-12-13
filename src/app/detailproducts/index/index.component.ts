import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailproductsService } from '../detailproducts.service';
import { Detailproducts } from '../detailproducts';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent implements OnInit {
  constructor(public DetailService: DetailproductsService) {}
  Detail: any;
  columns: string[] = ['prix', 'quantite'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit(): void {
    this.DetailService.getAll().subscribe((data: Detailproducts[]) => {
      this.Detail = new MatTableDataSource<any>(data);
    });
  }
}
