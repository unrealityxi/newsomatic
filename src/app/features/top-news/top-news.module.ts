import { NgModule } from '@angular/core';

import { TopNewsRoutingModule } from './top-news-routing.module';
import { TopNewsComponent } from './components/top-news/top-news.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TopNewsComponent],
  imports: [
    SharedModule,
    TopNewsRoutingModule
  ]
})
export class TopNewsModule { }
