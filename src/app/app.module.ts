import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsService } from 'src/app/services/news.service';
import { HttpClientModule } from '@angular/common/http';
import { LanguageService } from 'src/app/services/language.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    SharedModule
  ],
  providers: [NewsService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
