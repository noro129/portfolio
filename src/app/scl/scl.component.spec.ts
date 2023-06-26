import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SclComponent } from './scl.component';

describe('SclComponent', () => {
  let component: SclComponent;
  let fixture: ComponentFixture<SclComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SclComponent]
    });
    fixture = TestBed.createComponent(SclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
