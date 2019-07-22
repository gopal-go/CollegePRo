import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookwmComponent } from './bookwm.component';

describe('BookwmComponent', () => {
  let component: BookwmComponent;
  let fixture: ComponentFixture<BookwmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookwmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookwmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
