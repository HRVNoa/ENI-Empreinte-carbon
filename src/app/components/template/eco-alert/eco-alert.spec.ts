import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoAlert } from './eco-alert';

describe('EcoAlert', () => {
  let component: EcoAlert;
  let fixture: ComponentFixture<EcoAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoAlert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
