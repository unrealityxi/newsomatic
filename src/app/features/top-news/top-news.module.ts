import { NgModule } from '@angular/core';

import { TopNewsRoutingModule } from './top-news-routing.module';
import { TopNewsComponent } from './components/top-news/top-news.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';


@NgModule({
  declarations: [TopNewsComponent],
  imports: [
    SharedModule,
    SharedComponentsModule,
    TopNewsRoutingModule
  ]
})
export class TopNewsModule { }
