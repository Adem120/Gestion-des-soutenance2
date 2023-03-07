import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEtudientComponent } from './update-etudient.component';

describe('UpdateEtudientComponent', () => {
  let component: UpdateEtudientComponent;
  let fixture: ComponentFixture<UpdateEtudientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEtudientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEtudientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
