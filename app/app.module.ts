import './rxjs-extensions';

import {NgModule}      from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {AppRoutingModule}  from './app-routing.module';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api/in-memory-web-api.module';
import {InMemoryDataService}  from './in-memory-data.service';

import {AppComponent}  from './app.component';
import {LibraryListComponent}  from './components/library-list.component';
import {LibraryFilterComponent}  from './components/library-filter.component';
import {LibraryViewComponent}  from './components/library-view.component';
import {LibraryService}  from './components/library.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LibraryListComponent,
    LibraryFilterComponent,
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
