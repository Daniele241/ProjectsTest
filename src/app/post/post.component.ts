import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

import { PostModel } from '../../model/post.model';

let url = "http://localhost:3000/posts";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  image: string;
  text: string;
  datePost = new Date();

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onChangedFile(event: any) {
    this.image = event.target.value;
    console.log(this.image);
  }

  onChangedText(event: any) {
    this.text = event.target.value;
    console.log(this.text);
  }

  onClickButton() {
    this.postInfo();
  }

  postInfo() {
    let post = new PostModel(this.image, this.text, this.datePost)
    this.http.post(url,post)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}
