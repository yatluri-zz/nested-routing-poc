import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FirstComponentModel } from './models/first-component-model';
import { SiteTemplateService } from './services/site-template.service';
import { SiteTemplate } from '@admin/models/site-template';
import { ColorList } from './interfaces/ColorList';
import { DataTransferService } from '@admin/services/data-transfer.service';
@Component({
  selector: 'app-first-parent-route',
  templateUrl: './first-parent-route.component.html',
  styleUrls: ['./first-parent-route.component.scss']
})
export class FirstParentRouteComponent extends FirstComponentModel
  implements OnInit {
  constructor(
    private sitTemplateService: SiteTemplateService,
    private siteRouter: Router,
    private dataTransferService: DataTransferService
  ) {
    super();
  }

  ngOnInit() {
    this.sitTemplateService.getMedia().subscribe((response: SiteTemplate[]) => {
      if (response && response !== undefined) {
        console.log(response['Media']);
        this.mediaList = response['Media'];
      }
    });
  }
  onSelectColor(x: ColorList, $event, media: SiteTemplate) {
    if (
      this.previousMiddleElement &&
      this.previousMiddleElement !== undefined
    ) {
      this.previousMiddleElement.style.opacity = '0';
      this.previousMiddleElement.style.display = 'none';
    }
    const checkMark: HTMLElement = <HTMLElement>(
      $event.target.parentElement.parentElement.parentElement.parentElement
        .previousElementSibling
    );
    checkMark.style.opacity = '1';
    checkMark.style.display = 'block';
    checkMark.style.zIndex = '1';
    this.isCheckMark = true;
    this.previousMiddleElement = checkMark;
    this.dataTransferService.setBackGroundImage(media.MediaUrl);
    setTimeout(() => {
      this.siteRouter.navigate(['/ParentRoute']);
    }, 1000);
  }
}
