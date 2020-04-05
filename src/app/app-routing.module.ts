import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Routing for Home component 
import { HomeComponent } from './home/home.component';
//Routing for Student Info
import { InfoComponent } from './info/info.component';
//Routing for Student result
import { ShowComponent } from './show/show.component';



const routes: Routes = [
 // {path: '', redirectTo: '/home', pathMatch: 'full'},
 // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'stud', component: InfoComponent},
  //{path: 'get/:degree/:year/:board/:roll', component: View},
  {path: 'get/:degree/:year/:board/:roll', component: ShowComponent},
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  InfoComponent,
  ShowComponent
]
