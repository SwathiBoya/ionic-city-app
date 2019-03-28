import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponent } from './booking.component';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
