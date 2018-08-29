import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRouteConfig } from './app.route.config';
import { AppComponent } from './app.component';
import * as Parent from './parent-route/index';
import * as FirstComponent from './first-parent-route/index';
import { DataTransferService } from '@admin/services/data-transfer.service';

@NgModule({
  declarations: [
    AppComponent,
    Parent.ParentRouteComponent,
    Parent.FirstChildComponent,
    Parent.SecondChildComponent,
    Parent.ThirdChildComponent,
    FirstComponent.FirstParentRouteComponent,
    FirstComponent.TitleColorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRouteConfig
  ],
  providers: [DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule {}
