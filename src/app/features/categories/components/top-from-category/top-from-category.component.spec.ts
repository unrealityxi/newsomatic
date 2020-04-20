import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFromCategoryComponent } from './top-from-category.component';

describe('TopFromCategoryComponent', () => {
  let component: TopFromCategoryComponent;
  let fixture: ComponentFixture<TopFromCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFromCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFromCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
