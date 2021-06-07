import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ParentComponent } from './pages/nested-pages/parent/parent.component';
import { FirstChildComponent } from './pages/nested-pages/children/first-child/first-child.component';
import { SecondChildComponent } from './pages/nested-pages/children/second-child/second-child.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    NotFoundComponent,
    ParentComponent,
    FirstChildComponent,
    SecondChildComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
