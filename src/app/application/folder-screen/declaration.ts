
import { SharedModule } from 'src/app/shared';
import { FolderScreenComponent } from './component';
import { FolderScreenRoutingModule } from './folder-screen-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
export const Imports = [CommonModule, SharedModule, FormsModule, FolderScreenRoutingModule]
export const Components = [FolderScreenComponent]
export const Providers = []
