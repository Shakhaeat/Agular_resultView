import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { HttpClientModule } from '@angular/common/http';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
//import { FlexLayoutModule } from '@angular/flex-layout';



const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  FormsModule,
  MatTableModule,
  MatToolbarModule,
  MatProgressSpinnerModule
  //FlexLayoutModule
 // HttpClientModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
