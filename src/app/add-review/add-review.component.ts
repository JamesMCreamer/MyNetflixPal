import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  review: any = {}

  constructor() { }

  ngOnInit(): void {
  }
onSubmit() {
  console.log(this.review);
}
}
