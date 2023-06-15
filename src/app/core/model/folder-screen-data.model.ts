export class FolderScreenData{
  creator? : string | undefined;
  folderName? : string | undefined
  subFolders? : FolderScreenData[] | undefined;
  id? : number | undefined;
  url? : string | undefined;
  prevUrl? : string | undefined;
  parentId? : number | undefined;
}
