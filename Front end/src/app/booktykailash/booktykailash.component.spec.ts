import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktykailashComponent } from './booktykailash.component';

describe('BooktykailashComponent', () => {
  let component: BooktykailashComponent;
  let fixture: ComponentFixture<BooktykailashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooktykailashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooktykailashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
