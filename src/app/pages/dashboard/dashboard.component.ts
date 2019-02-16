import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DashboardInterface } from './dashboard-interface';
import { DashboardData } from './dashboard-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public data: FormGroup;

  public displayedColumns: string[];
  public dataSource: any;
  public dataTable: any;

  public lastPosition: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.dataTable = DashboardData;
    this.displayedColumns = ['position', 'code', 'name', 'description', 'rationale', 'action'];
    this.dataSource = new MatTableDataSource<DashboardInterface>(this.dataTable);
    this.lastPosition = DashboardData.length + 1;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    const parameter = {
      position: [this.lastPosition],
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      rationale: ['', [Validators.required]]
    };
    this.data = this.formBuilder.group(parameter);
  }
  
  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public add(data: DashboardInterface, isValid: boolean) {
    if(isValid === true) {
      this.dataTable.push(data);
      this.dataSource._updateChangeSubscription();
    }
  }

  public remove(position: number) {
    this.dataTable.forEach((data: any, key: number) => {
      if(data.position === position) {
        this.dataTable.splice(key, 1);
      }
    });
    this.dataSource._updateChangeSubscription();
  }

}