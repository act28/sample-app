import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let libraries = [
      {
        code: 'arm',
        name: 'Architecture / Music Library',
        abbr: 'Arch Music',
        url: 'http://www.library.uq.edu.au/locations/architecture-music-library',
        open: '09:00:00',
        close: '17:00:00',
        rev: '0',
        notes: ''
      },
      {
        code: 'bio',
        name: 'Biological Sciences Library',
        abbr: 'Biol Sci',
        url: 'http://www.library.uq.edu.au/locations/biological-sciences-library',
        open: '00:00:00',
        close: '24:00:00',
        rev: '0',
        notes: 'Walk in access from 7am to 8pm. Entry after 8pm UQ ID card necessary.'
      },
      {
        code: 'cds',
        name: 'Centre for Digital Scholarship',
        abbr: 'Cent Dig',
        url: 'http://www.library.uq.edu.au/locations/center-digital-scholarship',
        open: '00:00:00',
        close: '24:00:00',
        rev: '0',
        notes: 'Walk in access from 7am to 8pm. Entry after 8pm UQ ID card necessary.'
      },
      {
        code: 'dhe',
        name: 'Dorothy Hill Engineering & Sciences Library',
        abbr: 'Dot Hill',
        url: 'http://www.library.uq.edu.au/locations/dorothy-hill-and-engineering-sciences-library',
        open: '00:00:00',
        close: '24:00:00',
        rev: '0',
        notes: 'Level one is a 24/7 study space. Entry is via Cooper Road when the Library is closed.'
      }
    ];

    return {libraries};
  }
}
