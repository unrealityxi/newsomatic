import { NgModule } from '@angular/core';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { NewsCarouselComponent } from './components/news-carousel/news-carousel.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { TopFromCategoryComponent } from './components/top-from-category/top-from-category.component';
@NgModule({
  declarations: [CategoriesComponent, NewsCarouselComponent, TopFromCategoryComponent],
  imports: [
    SharedModule,
    SharedComponentsModule,
    CategoriesRoutingModule,
    NgxTinySliderModule,
    MatExpansionModule,
    MatButtonModule,
    MatChipsModule,
  ],
  entryComponents: [],
})
export class CategoriesModule {}
