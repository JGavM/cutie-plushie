import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesPagesComponent } from './categories-pages.component';

describe('CategoriesPagesComponent', () => {
  let component: CategoriesPagesComponent;
  let fixture: ComponentFixture<CategoriesPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
