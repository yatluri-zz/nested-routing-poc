import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '@admin/services/rest.service';
import { SiteTemplate } from '@admin/models/site-template';

@Injectable({
  providedIn: 'root'
})
export class SiteTemplateService extends RestService<SiteTemplate> {
  constructor(protected http: HttpClient) {
    super(http);
  }
}
