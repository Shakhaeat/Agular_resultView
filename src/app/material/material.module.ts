import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { HttpClientModule } from '@angular/common/http';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  FormsModule,
  MatTableModule,
  MatProgressSpinnerModule
 // HttpClientModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
