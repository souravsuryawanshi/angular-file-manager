import { FolderScreenComponent } from './application/folder-screen/component/folder-screen/folder-screen.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROOT_FOLDER_DATA } from './core/constant';


const routes: Routes = [
  {
    path : 'root',
    loadChildren : () => import('./application/folder-screen').then((_)=>_.FolderScreenModule),
   // data : ROOT_FOLDER_DATA,

  },
  {
    path : '**',
    redirectTo : '/root',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
