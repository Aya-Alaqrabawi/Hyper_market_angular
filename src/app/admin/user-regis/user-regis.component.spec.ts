import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisComponent } from './user-regis.component';

describe('UserRegisComponent', () => {
  let component: UserRegisComponent;
  let fixture: ComponentFixture<UserRegisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
