import { Component, OnInit } from '@angular/core';
import { HomeButton } from './home-button/home-button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  homeButtonsList: HomeButton[] = [
    {
      label: 'Nos bureaux partagés'
    },
    {
      label: 'Nos bureaux ouverts'
    },
    {
      label: 'Salles de réunion'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
