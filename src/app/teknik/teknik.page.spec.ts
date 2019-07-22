import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeknikPage } from './teknik.page';

describe('TeknikPage', () => {
  let component: TeknikPage;
  let fixture: ComponentFixture<TeknikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeknikPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeknikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
