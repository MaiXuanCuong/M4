import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  birthday = new Date(1988, 3, 15); // April 15, 1988
 toggle = true; // start with true == shortDate
get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
 toggleFormat() { this.toggle = !this.toggle; }
  constructor() { }

  ngOnInit(): void {
    
  }

}
