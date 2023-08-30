import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentListComponent } from './components/parent-list/parent-list.component';
import { ChildResultComponent } from './components/child-result/child-result.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentListComponent,
    ChildResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//
    FormsModule//
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

