import { Component, Input, OnInit } from '@angular/core';

export interface HomeButton {
  label: string;
}

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.less']
})
export class HomeButtonComponent implements OnInit {

  @Input() button!: HomeButton;

  constructor() { }

  ngOnInit(): void {
  }

}
