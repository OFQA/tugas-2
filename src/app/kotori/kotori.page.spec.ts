import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KotoriPage } from './kotori.page';

describe('KotoriPage', () => {
  let component: KotoriPage;
  let fixture: ComponentFixture<KotoriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KotoriPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KotoriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
