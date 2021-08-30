import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-add-review',
 templateUrl: './add-review.component.html',
 styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
 
  review: any = {};
 
  constructor() { }
 
  ngOnInit() {
 
  }
 
  onSubmit() {
    console.log(this.review);
  }
}
