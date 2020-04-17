import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewsArticlePreviewComponent } from './components/news-article-preview/news-article-preview.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatCardModule, MatButtonModule, RouterModule],
declarations: [NewsArticlePreviewComponent],
  exports: [CommonModule, FlexLayoutModule, NewsArticlePreviewComponent]
})
export class SharedModule {}
