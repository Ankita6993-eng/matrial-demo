import { Component, OnInit,ViewChild } from '@angular/core';
import {ServicesService} from '../services.service'
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { delay } from 'rxjs/operators';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-matrial-modal',
  templateUrl: './matrial-modal.component.html',
  styleUrls: ['./matrial-modal.component.css']
})
export class MatrialModalComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email','phone'];
  pageEvent: PageEvent;
  pageNumber: number|any ;
  @ViewChild(MatTableDataSource) dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  pageSizeOptions: number[] = [2,3,4];  
  isLoading = true;
  constructor(private service : ServicesService) { }

  ngOnInit(): void {
    this.getdata()
  }

  getdata(){
    
    this.service.getUser().subscribe((data:any) => {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      this.dataSource = new MatTableDataSource(data);
     this.dataSource.paginator = this.paginator ;
      this.dataSource.sort = this.sort;
      
      //console.log('this.dataSource', this.dataSource);     
    });
    //this.isLoading = true;
    
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    //console.log('filterValue', filterValue);
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
  goToPage() {
    this.paginator.pageIndex = this.pageNumber - 1;
    this.paginator.page.next({
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.paginator.length
    });
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
}


}
