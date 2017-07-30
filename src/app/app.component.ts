import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name: string;
  selectedTrainer: any = null;
  trainers: any[] = [
    {
      name: 'Anh Vi',
      birthday: '1992',
      team: 'FE',
      avatar: ''
    },
    {
      name: 'Kien',
      birthday: '',
      team: 'Ruby',
      avatar: ''
    },
    {
      name: 'Hieu',
      birthday: '1995',
      team: 'PHP',
      avatar: ''
    }
  ]

  showDetails = (id: number) => {
    this.selectedTrainer = null;
    setTimeout(() => {
      this.selectedTrainer = this.trainers[id];
    },
    );
  }
}