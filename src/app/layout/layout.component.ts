import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public numbers: number[] = [5, 14, 22, 3, 7, 0, 9, 18, 45, 2, 12, 31, 8, 22];
  constructor() { }

  ngOnInit() {
  }

}
