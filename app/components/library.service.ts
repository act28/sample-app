import {Injectable} from '@angular/core';
import {Library} from './library';
import {LIBRARIES} from './mock-libraries';

@Injectable()
export class LibraryService {
  getLibraries(): Promise<Library[]> {
    return Promise.resolve(LIBRARIES);
  }

  getLibrary(id: string): Promise<Library> {
    return this.getLibraries().then(libraries => libraries.find(library => library.code === id));
  }
}
