import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudientsComponent } from './etudients.component';

describe('EtudientsComponent', () => {
  let component: EtudientsComponent;
  let fixture: ComponentFixture<EtudientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
