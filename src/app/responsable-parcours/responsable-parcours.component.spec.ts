import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableParcoursComponent } from './responsable-parcours.component';

describe('ResponsableParcoursComponent', () => {
  let component: ResponsableParcoursComponent;
  let fixture: ComponentFixture<ResponsableParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsableParcoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
