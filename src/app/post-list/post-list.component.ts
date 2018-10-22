import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
    this.getAll();
  } 
  
  getAll() {
    this.http.get('http://localhost:3000/posts')
      .subscribe(result => console.log(result));
  }
}
