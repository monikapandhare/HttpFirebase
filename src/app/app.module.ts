import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { PostDashboardComponent } from './shared/components/post-dashboard/post-dashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PostComponent } from './shared/components/post/post.component'

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostDashboardComponent,
    NavbarComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
