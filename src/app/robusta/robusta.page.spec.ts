import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobustaPage } from './robusta.page';

describe('RobustaPage', () => {
  let component: RobustaPage;
  let fixture: ComponentFixture<RobustaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobustaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobustaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
