import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrelamationComponent } from './addrelamation.component';

describe('AddrelamationComponent', () => {
  let component: AddrelamationComponent;
  let fixture: ComponentFixture<AddrelamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrelamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrelamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
