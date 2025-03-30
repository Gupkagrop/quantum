import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QubitInformationComponent } from './qubit-information.component';

describe('QubitInformationComponent', () => {
  let component: QubitInformationComponent;
  let fixture: ComponentFixture<QubitInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QubitInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QubitInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
