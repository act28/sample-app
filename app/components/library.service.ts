import {Injectable} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {Observable} from "rxjs";

import {Library} from './library';

@Injectable()
export class LibraryService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private librariesUrl = 'app/libraries'; // url to web api

  constructor(private http: Http) { }

  getLibraries(): Promise<Library[]> {
    return this.http.get(this.librariesUrl)
      .toPromise()
      .then(response => response.json().data as Library[])
      .catch(this.handleError);
  }

  getLibrary(id: string): Promise<Library> {
    return this.getLibraries().then(libraries => libraries.find(library => library.code === id));
  }

  search(term: string): Observable<Library[]> {
    return this.http
      .get(this.librariesUrl + `/?name=${term}`)
      .map((r: Response) => r.json().data as Library[]);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
