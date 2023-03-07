import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnsiengnantComponent } from './add-ensiengnant.component';

describe('AddEnsiengnantComponent', () => {
  let component: AddEnsiengnantComponent;
  let fixture: ComponentFixture<AddEnsiengnantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEnsiengnantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnsiengnantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
