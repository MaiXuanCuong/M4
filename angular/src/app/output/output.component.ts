import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
@Output() Chaclick = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  ConClick(){
    this.Chaclick.emit();
  }

}
