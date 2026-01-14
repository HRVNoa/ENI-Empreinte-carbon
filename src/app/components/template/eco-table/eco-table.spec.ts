import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoTable } from './eco-table';

describe('EcoTable', () => {
  let component: EcoTable;
  let fixture: ComponentFixture<EcoTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
