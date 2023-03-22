import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviorSubjectComponent } from './components/behavior-subject/behavior-subject.component';
import { CachingComponent } from './components/caching/caching.component';
import { ErrorHandlingRxjsComponent } from './components/error-handling-rxjs/error-handling-rxjs.component';
import { FormsRxjsComponent } from './components/forms-rxjs/forms-rxjs.component';
import { HigherOrderObservablesComponent } from './components/higher-order-observables/higher-order-observables.component';
import { HttpRxjsComponent } from './components/http-rxjs/http-rxjs.component';
import { ColdComponent } from './components/observables-types/cold/cold.component';
import { HotComponent } from './components/observables-types/hot/hot.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { SearchComponent } from './components/search/search.component';
import { SubjectComponent } from './components/subject/subject.component';
import { TestingComponent } from './components/testing/testing.component';
import { UnSubscribeComponent } from './components/unsubscribe-observables/unsubscribe.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'operators', component: OperatorsComponent },
  { path: 'types/cold', component: ColdComponent },
  { path: 'types/hot', component: HotComponent },
  { path: 'http-rxjs', component: HttpRxjsComponent },
  { path: 'forms', component: FormsRxjsComponent },
  { path: 'higher-order', component: HigherOrderObservablesComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'behaviorsubject', component: BehaviorSubjectComponent },
  { path: 'error-handling-rxjs', component: ErrorHandlingRxjsComponent },
  { path: 'unsubscribe', component: UnSubscribeComponent },
  { path: 'caching', component: CachingComponent },
  { path: 'search', component: SearchComponent },
  { path: 'testing', component: TestingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
