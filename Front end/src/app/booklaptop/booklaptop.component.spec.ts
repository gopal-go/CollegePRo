import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklaptopComponent } from './booklaptop.component';

describe('BooklaptopComponent', () => {
  let component: BooklaptopComponent;
  let fixture: ComponentFixture<BooklaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
