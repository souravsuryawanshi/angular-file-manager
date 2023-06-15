
import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { FolderScreenComponent } from "./component";
import { ROOT_FOLDER_DATA } from "src/app/core/constant";

const routes : Routes = [
  {
    path : '',
    component : FolderScreenComponent,
    data : ROOT_FOLDER_DATA,
    children: [
      // Existing child routes
    ],
  }
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})

export class FolderScreenRoutingModule{}
