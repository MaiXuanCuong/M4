import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  @Input() cardName: string = "Cường";
  @Input() email: string = "xuancuong@gmail.com";
  @Input() phone: string = '0843442357';

  constructor() {
  }

  ngOnInit() {
  }

}