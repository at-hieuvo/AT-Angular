import { Component } from '@angular/core';
import { listService } from './list.service';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [listService]
})
export class AppComponent {
  i: number;
}
