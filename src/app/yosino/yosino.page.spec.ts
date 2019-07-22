import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YosinoPage } from './yosino.page';

describe('YosinoPage', () => {
  let component: YosinoPage;
  let fixture: ComponentFixture<YosinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YosinoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YosinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
