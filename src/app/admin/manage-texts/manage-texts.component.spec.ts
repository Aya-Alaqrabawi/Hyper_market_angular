import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTextsComponent } from './manage-texts.component';

describe('ManageTextsComponent', () => {
  let component: ManageTextsComponent;
  let fixture: ComponentFixture<ManageTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTextsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
