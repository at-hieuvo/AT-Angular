import { Injectable } from '@angular/core';

@Injectable()
export class listService {

  trainers : any;

  constructor() {
    this.trainers = [
      {
        name: 'Vi',
        avatar: '',
        birthday: '01/01/1990',
        team: 'FE'
      },
      {
        name: 'Kien',
        avatar: '',
        birthday: '01/01/1992',
        team: 'Ruby'
      },
      {
        name: 'Hieu',
        avatar: '',
        birthday: '10/1/1995',
        team: 'PHP'
      }
    ];
  }

  getDetail(i: number){
    return this.trainers[i];
  }
}
