import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesInformationComponent } from './types-information.component';

describe('TypesInformationComponent', () => {
  let component: TypesInformationComponent;
  let fixture: ComponentFixture<TypesInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypesInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
