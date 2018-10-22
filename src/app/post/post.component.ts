import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  text: string;
  image: string;

  constructor() { }

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
    
  }
}
