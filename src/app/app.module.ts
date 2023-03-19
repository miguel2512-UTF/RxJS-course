import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { TestingComponent } from './components/testing/testing.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsRxjsComponent } from './components/forms-rxjs/forms-rxjs.component';
import { HttpRxjsComponent } from './components/http-rxjs/http-rxjs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Report1Component } from './components/forms-rxjs/report1/report1.component';
import { ColdComponent } from './components/observables-types/cold/cold.component';
import { HotComponent } from './components/observables-types/hot/hot.component';
import { HigherOrderObservablesComponent } from './components/higher-order-observables/higher-order-observables.component';
import { FromEventComponent } from './components/operators/from-event/from-event.component';
import { SubjectComponent } from './components/subject/subject.component';
import { BehaviorSubjectComponent } from './components/behavior-subject/behavior-subject.component';
import { ErrorHandlingRxjsComponent } from './components/error-handling-rxjs/error-handling-rxjs.component';
import { UnSubscribeComponent } from './components/unsubscribe-observables/unsubscribe.component';
import { CachingComponent } from './components/caching/caching.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './layouts/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    OperatorsComponent,
    TestingComponent,
    FormsRxjsComponent,
    HttpRxjsComponent,
    Report1Component,
    ColdComponent,
    HotComponent,
    HigherOrderObservablesComponent,
    FromEventComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ErrorHandlingRxjsComponent,
    UnSubscribeComponent,
    CachingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
