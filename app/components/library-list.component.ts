import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Library} from './library';
import {LibraryService} from './library.service';

@Component({
  moduleId: module.id,
  selector: 'library-list',
  templateUrl: 'library-list.component.html',
  styleUrls: ['library-list.component.css'],
})

export class LibraryListComponent implements OnInit {
  libraries: Library[] = [];

  constructor(private router: Router,
              private libraryService: LibraryService) {
  }

  ngOnInit(): void {
    this.getLibraries();
  }

  getLibraries(): void {
    this.libraryService.getLibraries().then(libraries => this.libraries = libraries);
  }

  gotoDetail(library: Library): void {
    this.router.navigate(['/library', library.code]);
  }
}
