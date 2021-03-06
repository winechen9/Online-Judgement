import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { DataService } from './services/data.service';
import { CollaborationService } from './services/collaboration.service';
import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditorComponent } from './components/editor/editor.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CallbackComponent } from './components/callback/callback.component';


@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent,
    EditorComponent,
    ErrorPageComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    CollaborationService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
