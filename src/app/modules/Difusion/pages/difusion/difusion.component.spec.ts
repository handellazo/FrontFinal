import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifusionComponent } from './difusion.component';

describe('DifusionComponent', () => {
  let component: DifusionComponent;
  let fixture: ComponentFixture<DifusionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DifusionComponent]
    });
    fixture = TestBed.createComponent(DifusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
