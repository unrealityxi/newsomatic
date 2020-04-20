import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './components/categories/categories.component';
import { TopFromCategoryComponent } from 'src/app/features/categories/components/top-from-category/top-from-category.component';

const routes: Routes = [{ path: '', component: CategoriesComponent }, {path: ':category', component: TopFromCategoryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
