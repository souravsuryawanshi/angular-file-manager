import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FolderScreenData, StorageService } from 'src/app/core';

@Component({
  selector : 'folder-screen',
  templateUrl : './folder-screen.component.html',
  styleUrls : ['./folder-screen.component.scss']
})

export class FolderScreenComponent implements OnInit{
   showCreateDialog : boolean = false;
   folderName : string | undefined
   allFoldersData : FolderScreenData | undefined
   currentFolderData  : FolderScreenData | undefined | any
   id : number | undefined
   constructor(private _router : Router,
    private _activatedRoute: ActivatedRoute ,
    private _storageService : StorageService
    ){
   }
   ngOnInit(): void {
    //  this._activatedRoute.data.subscribe((data)=>{
    //        this.id = data?.['id'];
    //  })
    console.log('init')
    this.allFoldersData = this._storageService.getFolderScreenData();
    this.id = JSON.parse(localStorage.getItem('currentId') as string)
    this.currentFolderData = this.getCurrentFolderData(this.id, this.allFoldersData as any)
   }
   onAddFolder(){
      this.showCreateDialog = true;
   }
   addDynamicRoute(newPath : string): void {
    const newRoute = {
      path: newPath.slice(1),
      component: FolderScreenComponent,
    };

    this._activatedRoute.routeConfig?.children?.push(newRoute);
    this._router.config.unshift(newRoute);
    this._router.resetConfig(this._router.config);
  }
   parseNewFolderData(){
     let id = Math.random();
     //localStorage.setItem('currentId',JSON.stringify(id))
     let newData : FolderScreenData = {
       id : id,
       folderName : this.folderName,
       url : this._router.url +'/'+ this.folderName,
       prevUrl : this._router.url,
       parentId : this.currentFolderData?.id,
       subFolders : []
     }
     return newData
   }
   onSubmit(){
       console.log(this.currentFolderData)
       this.id = JSON.parse(localStorage.getItem('currentId') as string)

      this.currentFolderData?.subFolders?.push(this.parseNewFolderData())
       this.appendNewFolderData(this.id, this.allFoldersData as any , this.currentFolderData as any)
     // this._storageService.setFolderScreenData(this.folderScreenData)
      this.showCreateDialog = false;
     // this.addDynamicRoute(`${this._router.url}/${this.folderName}`)
      // this._router.config.push({
      //   path : this._router.url +'/'+ this.folderName,
      //   component : FolderScreenComponent,
      //   data : {id : this.id}
      // })
      //console.log(this._router.config)
    }
    getCurrentFolderData(id : number | undefined, folders : FolderScreenData) : void | FolderScreenData {
      console.log(folders , id)
       if(folders?.id === id){
         console.log('reached')
        //  console.log(folders)
            return folders;
       }
       else{
         if(folders?.subFolders){
           for(let i=0;i < folders?.subFolders?.length;i++){
             console.log(i)
             const result = this.getCurrentFolderData(this.id, folders.subFolders[i]);
        if (result) {
          return result;
        }
           //return this.getCurrentFolderData(this.id, folders.subFolders[i])
         }
        }
       }
    }

   appendNewFolderData(id : number | undefined, folders : FolderScreenData, newFolder : FolderScreenData ) : void{
      if(folders?.id === id){
          console.log(folders)
           folders.subFolders = newFolder.subFolders
           console.log(folders)
           console.log(this.allFoldersData)
         // return folders;
           this._storageService.setFolderScreenData(this.allFoldersData);
          // return ;

      }
      else{
        if(folders?.subFolders){
          for(let i=0;i < folders?.subFolders?.length;i++){
           this.appendNewFolderData(this.id, folders.subFolders[i], newFolder)  //return removed
        }
       }
      }
   }




    resetView(folder : FolderScreenData){
        this.showCreateDialog = false;
        localStorage.setItem('currentId',JSON.stringify(folder.id))
        this.id = JSON.parse(localStorage.getItem('currentId') as string)

        this.currentFolderData = this.getCurrentFolderData(this.id, this.allFoldersData as any)
        console.log(this.currentFolderData)


    }
    navigateToSubfolder(folder : FolderScreenData){
      console.log(folder.url)
      this.resetView(folder)
    // this._router.navigateByUrl(folder.url as string)
     // this._router.navigateByUrl('root/dynamic-path')


    }
}
