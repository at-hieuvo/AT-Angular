import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})

export class FormComponent {  
   name: string;  
   constructor(){
   	this.name="Hieu";
   } 
 	
// @ViewChild(ListComponent) obj: ListComponent;
// 	addName	(name: string){
// 		this.obj.loadData(name);
// 	}
// }

}