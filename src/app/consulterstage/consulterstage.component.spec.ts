import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterstageComponent } from './consulterstage.component';

describe('ConsulterstageComponent', () => {
  let component: ConsulterstageComponent;
  let fixture: ComponentFixture<ConsulterstageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterstageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
