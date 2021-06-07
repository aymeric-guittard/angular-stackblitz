import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    component: ProductsComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // IMPORTANT : forChild in lazy-loaded modules !
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
