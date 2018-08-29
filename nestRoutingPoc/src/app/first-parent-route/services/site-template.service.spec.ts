import { TestBed, inject } from '@angular/core/testing';

import { SiteTemplateService } from './site-template.service';

describe('SiteTemplateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteTemplateService]
    });
  });

  it('should be created', inject([SiteTemplateService], (service: SiteTemplateService) => {
    expect(service).toBeTruthy();
  }));
});
