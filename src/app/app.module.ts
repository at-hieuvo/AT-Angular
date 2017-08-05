import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmptyDataDirective} from './directives/empty-data.directive';
import {DefaultImage} from './pipes/image.pipe'
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {listService} from './list.service';
import {Http} from "@angular/http";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EmptyDataDirective,
    DefaultImage,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [listService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
