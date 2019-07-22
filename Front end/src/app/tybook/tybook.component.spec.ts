import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TybookComponent } from './tybook.component';

describe('TybookComponent', () => {
  let component: TybookComponent;
  let fixture: ComponentFixture<TybookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TybookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
