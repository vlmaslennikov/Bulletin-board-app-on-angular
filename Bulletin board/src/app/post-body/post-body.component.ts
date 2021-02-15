import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../main-page/main-page.component';
@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.css']
})
export class PostBodyComponent implements OnInit {

  @Input() post:Post
  constructor() { }

  ngOnInit(): void {
  }

}
