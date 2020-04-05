import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
// import { InfoComponent } from './info/info.component';
// import { ShowComponent } from './show/show.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
//import { MatButtonModule } from '@angular/material';
// import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent
    routingComponents
    // InfoComponent,
    // ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
    //FormsModule 
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
