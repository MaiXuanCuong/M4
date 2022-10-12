import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component implements OnInit {
  fontSize = 14;
  constructor() { }

  ngOnInit(): void {
  }
  changeFontSizeValue(fontSize:any) {
    this.fontSize = fontSize;
  }

}
