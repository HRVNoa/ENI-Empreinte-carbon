import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoProgress } from './eco-progress';

describe('EcoProgress', () => {
  let component: EcoProgress;
  let fixture: ComponentFixture<EcoProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoProgress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
