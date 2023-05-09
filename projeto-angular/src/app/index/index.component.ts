import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  imagePath: string;
  constructor() {
    //image location
    this.imagePath = '/src/assets/marca_d_agua_bluework-transformed.jpeg '
  }
  
  ngOnInit() {
  }
  
}
