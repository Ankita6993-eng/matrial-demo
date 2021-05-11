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
  public pageSize = 3;
  public currentPage = 0;
  public totalSize = 0;
  public index = 0;
  pageSizeOptions: number[] = [2,3,4];

  constructor(private service : ServicesService){}

  ngOnInit() {
    this.getdata()
  }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  getdata(){
    this.isLoading = true;
    this.service.getUser().pipe(delay(1000)).subscribe((data:any) => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator ;
      this.array = data;
      this.dataSource.sort = this.sort;
      //console.log('this.dataSource', this.dataSource);     
    });
    this.activePageDataChunk = this.array.slice(0,this.pageSize);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  onPageChanged(e:any) {
    console.log('this.array', this.array);
    this.index=e.pageIndex
    console.log('e.pageIndex', this.index);
    console.log('pageSize', e.pageSize)
    let firstCut = this.index * e.pageSize;
    console.log('firstCut', firstCut)
    let secondCut = firstCut + e.pageSize;
    console.log('secondCut', secondCut)
    this.activePageDataChunk = this.array.slice(firstCut, secondCut);
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

  