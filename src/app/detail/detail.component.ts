import { Component, Input, OnChanges} from '@angular/core';
import { listService } from '../list.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})

export class DetailComponent {
  @Input() trainerDetail: any;
  //trainerDetail: any;
  constructor(private appService: listService) { }

  // ngOnChanges() {
  //   setTimeout( () => {
  //     this.trainerDetail = this.appService.trainer;
  //   });
  // }
}
