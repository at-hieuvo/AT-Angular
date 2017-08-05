import { Component } from '@angular/core';
import { listService } from './list.service';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import {timeout} from "q";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [listService]
})
export class AppComponent {
  trainer: any;

  constructor(private service:listService) {
  }

  detail(index: any)  {
    console.log("sdsd");
    this.trainer = this.service.trainers[index] ;
    //console.log(trainer);

  }
}
