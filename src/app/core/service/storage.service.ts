import { FolderScreenData } from './../model/folder-screen-data.model';
import { Injectable } from "@angular/core";

@Injectable()

export class StorageService{
   constructor(){}
   setFolderScreenData(data : FolderScreenData | undefined){
     localStorage.setItem('data',JSON.stringify(data));
   }
   getFolderScreenData(){
     return JSON.parse(localStorage.getItem('data') as string)
   }
   setRouteData(){

   }
   getRouteData(){

   }
}
