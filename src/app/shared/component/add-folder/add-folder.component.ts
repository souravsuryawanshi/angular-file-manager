import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector : 'add-folder',
  templateUrl : './add-folder.component.html',
  styleUrls : ['./add-folder.component.scss']
})

export class AddFolderComponent{
  @Output() clickEmitter = new EventEmitter();
   onClick(){
       this.clickEmitter.emit(true)
   }
}
