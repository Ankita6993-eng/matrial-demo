import { Component,ViewChild, OnInit,AfterViewInit} from '@angular/core';
import { from } from 'rxjs';
import {ServicesService} from './services.service'
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'username', 'email','phone'];
  
  @ViewChild(MatTableDataSource) dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isLoading = true;
  constructor(private service : ServicesService){}

  ngOnInit() {
    this.getdata()
  }

  getdata(){
    this.isLoading = true;
    this.service.getUser().pipe(delay(1000)).subscribe((data:any) => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator ;
      this.dataSource.sort = this.sort;
      console.log('this.dataSource', this.dataSource); 
      
    },
    error => this.isLoading = false
    );
    
  }

  
  applyFilter(event: Event){
    
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('filterValue', filterValue);
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    this.isLoading = false
  }
  
 
  }

  