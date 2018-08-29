import { TestBed, inject } from '@angular/core/testing';

import { DataTransferService } from './data-transfer.service';

describe('DataTransferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataTransferService]
    });
  });

  it('should be created', inject([DataTransferService], (service: DataTransferService) => {
    expect(service).toBeTruthy();
  }));
});
