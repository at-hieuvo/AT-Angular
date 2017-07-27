import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  data: any
  constructor() {
    this.data = [];
  }

  ngOnInit() { }

}