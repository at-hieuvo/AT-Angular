import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'app';
  @ViewChild(ListComponent) listComp: any;
  @ViewChild(FormComponent) formComp: any;
  members: any

  constructor() {
    this.members = [];
  }

  pushNewMember = (e: any) => {
    this.listComp.data.push(e);
  }

  ngOnInit() {
    this.formComp.newMember = (id: any) => {
      this.pushNewMember(this.formComp.name);
    }

    this.listComp.deleteMember = (id: any) => {
      this.listComp.data.splice(id, 1);
    }
  }

  ngAfterContentInit() { }
}