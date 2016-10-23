import {NgModule}      from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {LibraryListComponent}  from './components/library-list.component';
import {LibraryViewComponent}  from './components/library-view.component';
import {LibraryService}  from './components/library.service';

import {AppRoutingModule}  from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LibraryListComponent,
    LibraryViewComponent
  ],
  providers: [
    LibraryService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
