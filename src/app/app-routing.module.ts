import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './pages/home/home.component';
import { FirstChildComponent } from './pages/nested-pages/children/first-child/first-child.component';
import { SecondChildComponent } from './pages/nested-pages/children/second-child/second-child.component';
import { ParentComponent } from './pages/nested-pages/parent/parent.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    path: 'nested',
    component: ParentComponent, // this component should have a router-outlet in its template
    children: [
      {
        path: 'first', // child route path
        component: FirstChildComponent // child route component that the router renders
      },
      {
        path: 'second',
        component: SecondChildComponent // another child route component that the router renders
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    component: NotFoundComponent,
    path: '**'
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
