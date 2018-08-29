import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstParentRouteComponent } from './first-parent-route.component';

describe('FirstParentRouteComponent', () => {
  let component: FirstParentRouteComponent;
  let fixture: ComponentFixture<FirstParentRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstParentRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstParentRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
