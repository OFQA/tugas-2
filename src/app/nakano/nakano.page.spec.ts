import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NakanoPage } from './nakano.page';

describe('NakanoPage', () => {
  let component: NakanoPage;
  let fixture: ComponentFixture<NakanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NakanoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NakanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
