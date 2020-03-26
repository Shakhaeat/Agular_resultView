import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Routing for Home component 
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';



const routes: Routes = [
 // {path: '', redirectTo: '/home', pathMatch: 'full'},
 // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'stud', component: InfoComponent},
  //{path: 'get/:degree/:year/:board/:roll', component: View},

  //{path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  InfoComponent
]
