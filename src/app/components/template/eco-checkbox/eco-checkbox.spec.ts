import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoCheckbox } from './eco-checkbox';

describe('EcoCheckbox', () => {
  let component: EcoCheckbox;
  let fixture: ComponentFixture<EcoCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoCheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
