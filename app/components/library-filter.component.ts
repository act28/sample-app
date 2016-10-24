import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { Library }    from './library';
import { LibraryService }    from './library.service';

@Component({
  moduleId: module.id,
  selector: 'library-filter',
  templateUrl: 'library-filter.component.html',
  styleUrls: ['library-filter.component.css'],
  providers: [LibraryService]
})

export class LibraryFilterComponent implements OnInit {
  libraries: Observable<Library[]>;

  private searchTerms = new Subject<string>();

  constructor(
    private librarySearchService: LibraryService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.libraries = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the search observable
        ? this.librarySearchService.search(term)
        // or the observable of empty libraries if no search term
        : Observable.of<Library[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Library[]>([]);
      });
  }

  gotoDetail(library: Library): void {
    let link = ['/library', library.code];
    this.router.navigate(link);
  }
}
