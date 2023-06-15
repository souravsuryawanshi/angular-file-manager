
import { Component } from '@angular/core';
import { StorageService } from './core';
import { ROOT_FOLDER_DATA } from './core/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-file-manager';
  constructor(private _storageService : StorageService){

  }
  ngOnInit(){
    this._storageService.setFolderScreenData(ROOT_FOLDER_DATA)
     localStorage.setItem('currentId', JSON.stringify(ROOT_FOLDER_DATA.id))
  }
}
