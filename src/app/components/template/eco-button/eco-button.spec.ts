import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoButton } from './eco-button';

describe('EcoButton', () => {
  let component: EcoButton;
  let fixture: ComponentFixture<EcoButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
