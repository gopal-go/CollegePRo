import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookacComponent } from './bookac.component';

describe('BookacComponent', () => {
  let component: BookacComponent;
  let fixture: ComponentFixture<BookacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
