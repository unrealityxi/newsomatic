import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';
import { newsCategories } from 'src/app/models/enums/newsCategories.enum';
import { NewsService } from 'src/app/services/news.service';
import { NewsPage } from 'src/app/models/news/news-page.model';
import { NewsArticle } from 'src/app/models/news/news-article.model';
import { LanguageService } from 'src/app/services/language.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { languages } from 'src/app/models/enums/languages.enum';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {

  categories = Object.values(newsCategories);
  currentLanguage: languages;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.listenToLanguageChanges();
  }

  listenToLanguageChanges(){
    this.languageService.language$.pipe(untilDestroyed(this)).subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }

  ngOnDestroy(){

  }
}
