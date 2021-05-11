import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  quantums = [
    {
      id: 1,
      name: 'Software Engineering quantum',
      link:
        'https://tgdown.eu-gb.mybluemix.net/15718434829000500/software%20Engineering%20quantum.pdf'
    }
  ];
  selectedValue = null;
}
