import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LibraryListComponent}   from './components/library-list.component';
import {LibraryViewComponent}   from './components/library-view.component';

const routes: Routes = [
  {path: '', component: LibraryListComponent},
  {path: 'library/:id', component: LibraryViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
