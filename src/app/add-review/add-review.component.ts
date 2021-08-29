import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
articles;
  review: any = {}

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
  });
  }
  
}
