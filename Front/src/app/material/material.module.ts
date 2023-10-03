import { NgModule } from '@angular/core';
import {MatInputModule} from "@angular/material/input"
import {MatSelectModule}  from "@angular/material/select"
import {MatAutocompleteModule}  from "@angular/material/autocomplete"
import {MatToolbarModule}  from "@angular/material/toolbar"
import {MatMenuModule}  from "@angular/material/menu"
import {MatIconModule}  from "@angular/material/icon"
import {MatButtonModule}  from "@angular/material/button"


const materialsComp:any = [MatInputModule,MatSelectModule,MatAutocompleteModule,MatToolbarModule,MatMenuModule,MatIconModule,MatButtonModule]

@NgModule({
  declarations: [],
  imports: [
    materialsComp,
  ],
  exports: [
    materialsComp
  ]
})
export class MaterialModule { }
