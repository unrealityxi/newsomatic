import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticlesPageComponent } from './news-articles-page.component';

describe('NewsListPageComponent', () => {
  let component: NewsArticlesPageComponent;
  let fixture: ComponentFixture<NewsArticlesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsArticlesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArticlesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
