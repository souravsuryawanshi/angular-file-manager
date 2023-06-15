import { NgModule } from "@angular/core";
import { Components, Exports, Imports, Providers } from "./declaration";

@NgModule({
  imports : Imports,
  exports : Exports,
  declarations : Components,
  providers : Providers
})

export class CoreModule{}
