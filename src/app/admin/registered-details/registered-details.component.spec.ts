import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredDetailsComponent } from './registered-details.component';

describe('RegisteredDetailsComponent', () => {
  let component: RegisteredDetailsComponent;
  let fixture: ComponentFixture<RegisteredDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
