import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupreclamationComponent } from './groupreclamation.component';

describe('GroupreclamationComponent', () => {
  let component: GroupreclamationComponent;
  let fixture: ComponentFixture<GroupreclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupreclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
