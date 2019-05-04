import { TestBed, inject } from '@angular/core/testing';

import { JQueryWrapperService } from './j-query-wrapper.service';

describe('JQueryWrapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JQueryWrapperService]
    });
  });

  it('should be created', inject([JQueryWrapperService], (service: JQueryWrapperService) => {
    expect(service).toBeTruthy();
  }));
});
