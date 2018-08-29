import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentModelView } from './models/parent-model-view';
import { DataTransferService } from '@admin/services/data-transfer.service';
@Component({
  selector: 'app-parent-route',
  templateUrl: './parent-route.component.html',
  styleUrls: ['./parent-route.component.scss']
})
export class ParentRouteComponent extends ParentModelView implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataTransferService: DataTransferService
  ) {
    super();
  }
  ngOnInit() {
    this.bodyContentElement = <HTMLElement>(
      document.querySelector('.body-parent-content ')
    );
    this.setBackground();
  }
  onRouteBack() {
    if (this.backRouteCurrentCount > this.backRouteMinCount) {
      this.forwardRouteCurrentCount = this.backRouteCurrentCount - 1;
      const currentBackRoute = this.backRouteCurrentCount;
      this.backRouteCurrentCount = this.backRouteCurrentCount - 1;
      this.router.navigate([`/ParentRoute/${currentBackRoute - 1}`]);
    }
  }
  onRoutForward() {
    if (this.forwardRouteCurrentCount < this.forwardRouteMaxCount) {
      this.backRouteCurrentCount = this.forwardRouteCurrentCount + 1;
      const currentRoute = this.forwardRouteCurrentCount;
      this.forwardRouteCurrentCount = this.forwardRouteCurrentCount + 1;
      this.router.navigate([`/ParentRoute/${currentRoute + 1}`]);
    }
  }
  setBackground() {
    this.bodyContentElement.style.background = `url(${this.dataTransferService.getBackGroundImageUrl()})`;
    this.bodyContentElement.style.backgroundPosition = 'center top';
    this.bodyContentElement.style.backgroundSize = ' 100% auto';
    this.bodyContentElement.style.position = 'absolute';
    this.bodyContentElement.style.left = '0';
    this.bodyContentElement.style.right = '0';
    this.bodyContentElement.style.top = '0';
    this.bodyContentElement.style.bottom = '0';
    this.bodyContentElement.style.opacity = '0.8';
    this.bodyContentElement.style.zIndex = '-1';
    this.bodyContentElement.style.filter = 'blur(2px)';
  }
}
