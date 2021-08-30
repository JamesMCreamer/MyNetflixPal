import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
 selector: 'app-add-review',
 templateUrl: './add-review.component.html',
 styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
 
  review: any = {};
 
  constructor(private db: AngularFireDatabase) { }
 
  ngOnInit() {
 
  }
 
  onSubmit() {
    this.review.date = new Date(this.review.date).valueOf();
    this.db.list('reviews').push(this.review)
    .then(_ => {
      this.review = {}
      console.log('success')
    })
  }
}
