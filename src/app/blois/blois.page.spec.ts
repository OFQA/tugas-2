import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloisPage } from './blois.page';

describe('BloisPage', () => {
  let component: BloisPage;
  let fixture: ComponentFixture<BloisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
