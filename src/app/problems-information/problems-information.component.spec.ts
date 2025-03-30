import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsInformationComponent } from './problems-information.component';

describe('ProblemsInformationComponent', () => {
  let component: ProblemsInformationComponent;
  let fixture: ComponentFixture<ProblemsInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemsInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
