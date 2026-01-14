import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoCarbonIndicator } from './eco-carbon-indicator';

describe('EcoCarbonIndicator', () => {
  let component: EcoCarbonIndicator;
  let fixture: ComponentFixture<EcoCarbonIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoCarbonIndicator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoCarbonIndicator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
