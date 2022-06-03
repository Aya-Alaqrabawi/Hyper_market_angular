import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSlidersComponent } from './manage-sliders.component';

describe('ManageSlidersComponent', () => {
  let component: ManageSlidersComponent;
  let fixture: ComponentFixture<ManageSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSlidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
