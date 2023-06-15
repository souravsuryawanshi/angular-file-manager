import { NgModule } from "@angular/core";
import { Components, Exports, Imports, Providers } from "./declaration";

@NgModule({
  imports : Imports,
  declarations : Components,
  exports : Exports,
  providers : Providers
})

export class SharedModule{}
