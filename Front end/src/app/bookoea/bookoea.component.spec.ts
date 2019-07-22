import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookoeaComponent } from './bookoea.component';

describe('BookoeaComponent', () => {
  let component: BookoeaComponent;
  let fixture: ComponentFixture<BookoeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookoeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookoeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
