import { NgModule } from '@angular/core';
import { NewsArticlePreviewComponent } from 'src/app/shared/components/news-article-preview/news-article-preview.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [MatCardModule, MatButtonModule, SharedModule],
  exports: [NewsArticlePreviewComponent],
  declarations: [NewsArticlePreviewComponent],
  providers: [],
})
export class SharedComponentsModule {}
