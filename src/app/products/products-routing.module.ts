import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add',
        component: ProductAddComponent
      },
      {
        path: 'edit',
        component: ProductEditComponent
      },
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'view',
        component: ProductViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
