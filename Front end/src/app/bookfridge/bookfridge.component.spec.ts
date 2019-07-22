import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookfridgeComponent } from './bookfridge.component';

describe('BookfridgeComponent', () => {
  let component: BookfridgeComponent;
  let fixture: ComponentFixture<BookfridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookfridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookfridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
