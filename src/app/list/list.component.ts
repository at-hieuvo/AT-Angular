// import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
// import { listService } from '../list.service';
//
// @Component({
//   selector: 'app-list',
//   templateUrl: './list.component.html',
//   styleUrls: ['./list.component.css'],
//   providers: [listService]
// })
//
// export class ListComponent {
//   @Input() trainers: any;
//   @Output() showEvent: EventEmitter<any> = new EventEmitter<any>();
//   i : number;
//
//   constructor(private listAll: listService) { }
//
//   ngOnInit(){
//     this.listAll.getAll()
//       .subscribe(
//       data => {
//         this.trainers = data;
//       },
//       err =>
//         console.log("error, error code: %s, URL: %s", err.status, err.url),
//       () => console.log("sucsessful")
//     );
//   }
//   showDetail(i: number){
//     this.showEvent.emit(i);
//   }
// }
import { Component, Output, EventEmitter } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Output() sendMemberId: EventEmitter<any> = new EventEmitter();
  trainers: any;

  constructor(private ListService: ListService) {
    this.ListService.getData().subscribe(
      (data: any) => {
        this.trainers=data.data;
      },
      err => {
        console.log("can't get products.");
      }
    );;
  }

  getId(memberid: number) {
    this.sendMemberId.emit(memberid);
  }
}
