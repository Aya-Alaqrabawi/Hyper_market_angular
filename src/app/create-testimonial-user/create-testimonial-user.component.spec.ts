import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestimonialUserComponent } from './create-testimonial-user.component';

describe('CreateTestimonialUserComponent', () => {
  let component: CreateTestimonialUserComponent;
  let fixture: ComponentFixture<CreateTestimonialUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTestimonialUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestimonialUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
