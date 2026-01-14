import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoInput } from './eco-input';

describe('EcoInput', () => {
  let component: EcoInput;
  let fixture: ComponentFixture<EcoInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
