import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewsArticlePreviewComponent } from './components/news-article-preview/news-article-preview.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';
import { NgxTinySliderModule } from 'ngx-tiny-slider';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [],
  exports: [CommonModule, FlexLayoutModule],
})
export class SharedModule {}
