import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicaPage } from './arabica.page';

describe('ArabicaPage', () => {
  let component: ArabicaPage;
  let fixture: ComponentFixture<ArabicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArabicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
