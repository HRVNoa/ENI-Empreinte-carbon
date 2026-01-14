import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoDivider } from './eco-divider';

describe('EcoDivider', () => {
  let component: EcoDivider;
  let fixture: ComponentFixture<EcoDivider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoDivider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoDivider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
