import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EComponent } from './e.component';

describe('EComponent', () => {
  let component: EComponent;
  let fixture: ComponentFixture<EComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EComponent]
    });
    fixture = TestBed.createComponent(EComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
