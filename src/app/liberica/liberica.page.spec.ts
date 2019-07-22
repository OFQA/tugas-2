import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibericaPage } from './liberica.page';

describe('LibericaPage', () => {
  let component: LibericaPage;
  let fixture: ComponentFixture<LibericaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibericaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibericaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
