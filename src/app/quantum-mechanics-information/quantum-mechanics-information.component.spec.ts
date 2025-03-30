import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumMechanicsInformationComponent } from './quantum-mechanics-information.component';

describe('QuantumMechanicsInformationComponent', () => {
  let component: QuantumMechanicsInformationComponent;
  let fixture: ComponentFixture<QuantumMechanicsInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantumMechanicsInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantumMechanicsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
