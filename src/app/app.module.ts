import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmptyDataDirective} from './directives/empty-data.directive';
import {DefaultImage} from './pipes/image.pipe'
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {listService} from './list.service';

@NgModule({
  declarations: [
    AppComponent,
    EmptyDataDirective,
    DefaultImage,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [listService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
