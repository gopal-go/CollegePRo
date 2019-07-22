import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookledComponent } from './bookled.component';

describe('BookledComponent', () => {
  let component: BookledComponent;
  let fixture: ComponentFixture<BookledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
