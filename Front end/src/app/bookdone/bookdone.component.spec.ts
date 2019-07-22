import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdoneComponent } from './bookdone.component';

describe('BookdoneComponent', () => {
  let component: BookdoneComponent;
  let fixture: ComponentFixture<BookdoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookdoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
