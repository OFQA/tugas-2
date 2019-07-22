import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinaPage } from './tina.page';

describe('TinaPage', () => {
  let component: TinaPage;
  let fixture: ComponentFixture<TinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
