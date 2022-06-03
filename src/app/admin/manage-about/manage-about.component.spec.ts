import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAboutComponent } from './manage-about.component';

describe('ManageAboutComponent', () => {
  let component: ManageAboutComponent;
  let fixture: ComponentFixture<ManageAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
