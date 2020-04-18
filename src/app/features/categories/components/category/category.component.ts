import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';

import { NewsService } from 'src/app/services/news.service';
import { newsCategories } from 'src/app/models/enums/newsCategories.enum';
import { NewsArticle } from 'src/app/models/news/news-article.model';
import { NewsPage } from 'src/app/models/news/news-page.model';
import * as uuid from 'uuid';
import { NgxTinySliderComponent } from 'ngx-tiny-slider/lib/ngx-tiny-slider.component';
import { NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';
import { LanguageService } from 'src/app/services/language.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

declare var tns: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  @Input() category: newsCategories = newsCategories.business;
  @Input() expanded: boolean = false;
  @ViewChild('slider', { static: false }) slider: NgxTinySliderComponent;

  containerId = `slider-${uuid.v4()}`;

  public articles: Array<NewsArticle> = [];
  private articlesLimit = 5;

  sliderConfig: NgxTinySliderSettingsInterface = {
    arrowKeys: true,
    autoWidth: false,
    gutter: 10,
    edgePadding: 10,
    items: 1,
    controlsText: ['<', '>'],
    controls: true,
    mouseDrag: true,
    waiteForDom: true,
    nav: false,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2,
      },
      700: {
        gutter: 30,
      },
      900: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1600: {
        items: 5,
      },
    },
  };

  constructor(
    private newsService: NewsService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.listenToLanguageChangeAndGetCategoryData();
  }

  getCategoryData(category: newsCategories, limit?: number) {
    this.newsService
      .getTopNewsByCategory(category, limit)
      .subscribe((data: NewsPage) => {
        this.articles = data.articles;
        this.refreshSlider();
      });
  }

  shouldShowSlider = true;

  refreshSlider() {
    this.shouldShowSlider = false;
    setTimeout(() => {
      this.shouldShowSlider = true;

        this.loadSlider();
   
    });
  }

  loadSlider() {
    setTimeout(() => {
      this.slider.domReady.next(true);
    });
  }

  handleTitleClick($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.articlesLimit = 100;
    this.getCategoryData(this.category, this.articlesLimit);
  }

  listenToLanguageChangeAndGetCategoryData() {
    this.languageService.language$
      .pipe(untilDestroyed(this))
      .subscribe((lang) => {
        this.getCategoryData(this.category, this.articlesLimit);
      });
  }

  ngOnDestroy() {}
}
