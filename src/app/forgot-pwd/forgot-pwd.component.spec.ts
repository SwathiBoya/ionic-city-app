import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPwdComponent } from './forgot-pwd.component';

describe('ForgotPwdComponent', () => {
  let component: ForgotPwdComponent;
  let fixture: ComponentFixture<ForgotPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPwdComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
