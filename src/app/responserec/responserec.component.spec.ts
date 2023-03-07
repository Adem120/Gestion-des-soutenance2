import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponserecComponent } from './responserec.component';

describe('ResponserecComponent', () => {
  let component: ResponserecComponent;
  let fixture: ComponentFixture<ResponserecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponserecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponserecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
