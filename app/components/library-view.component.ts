import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location}               from '@angular/common';

import {Library} from './library';
import {LibraryService} from './library.service';

@Component({
  moduleId: module.id,
  selector: 'library-view',
  templateUrl: 'library-view.component.html',
  styleUrls: ['library-view.component.css']
})

export class LibraryViewComponent implements OnInit {
  library: Library;

  constructor(private libraryService: LibraryService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.libraryService.getLibrary(id)
        .then(library => this.library = library);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
