import { TestBed, inject } from '@angular/core/testing';

import { HttpservisService } from './httpservis.service';

describe('HttpservisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpservisService]
    });
  });

  it('should be created', inject([HttpservisService], (service: HttpservisService) => {
    expect(service).toBeTruthy();
  }));
});
