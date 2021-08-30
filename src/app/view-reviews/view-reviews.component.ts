
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ViewReviewsDataSource, ViewReviewsItem } from './view-reviews-datasource';

@Component({
  selector: 'app-view-reviews',
  templateUrl: './view-reviews.component.html',
  styleUrls: ['./view-reviews.component.scss']

})export class ViewReviewsComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ViewReviewsItem>;
  dataSource: ViewReviewsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['date', 'text'];
  subscription: Subscription;

  constructor(private db: AngularFireDatabase) {

  }

  ngOnInit() {
    this.subscription = this.db.list<ViewReviewsItem>('reviews').valueChanges().subscribe(d=>{
      console.log('data streaming');
      this.dataSource = new ViewReviewsDataSource(this.paginator, this.sort);    
      this.dataSource.data = d;
    });    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}