import { Component,ViewChild, OnInit,AfterViewInit} from '@angular/core';
import { from } from 'rxjs';
import {ServicesService} from './services.service'
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { delay } from 'rxjs/operators';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{

  displayedColumns: string[] = ['id', 'name', 'username', 'email','phone'];
  pageEvent: PageEvent;
  pageNumber: number|any ;
  @ViewChild(MatTableDataSource) dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  activePageDataChunk:any = []
  isLoading = true;
  public array: any=[];
  public pageSize = 2;
  public currentPage = 0;
  public totalSize = 0;
  public index = 0;
  pageSizeOptions: number[] = [2,3,4];

  constructor(private service : ServicesService){}

  ngOnInit() {
    this.getdata()
    
    // setTimeout(() => {
    //   this.isLoading = false;
    //   this.dataSource.paginator = this.paginator ;
    // }, 100);
  
  }
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  public handlePage(e: any) {
    console.log('page changed', e);
   // this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();

    this.isLoading = true;
  }

  getdata(){
    
    this.service.getUser().subscribe((data:any) => {
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
      this.dataSource = new MatTableDataSource(data);
     this.dataSource.paginator = this.paginator ;
      this.array = data;
      this.dataSource.sort = this.sort;
      this.totalSize = this.array.length;
      this.iterator();
      //console.log('this.dataSource', this.dataSource);     
    });
    this.isLoading = true;
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.dataSource = part;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

 

  goToPage() {
    this.paginator.pageIndex = this.pageNumber - 1;
    this.paginator.page.next({
      
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.paginator.length
      
    });
  }


  
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    //console.log('filterValue', filterValue);
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
  
 
  }

  