import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeguminPage } from './megumin.page';

describe('MeguminPage', () => {
  let component: MeguminPage;
  let fixture: ComponentFixture<MeguminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeguminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeguminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
