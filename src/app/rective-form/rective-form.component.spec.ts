import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectiveFormComponent } from './rective-form.component';

describe('RectiveFormComponent', () => {
  let component: RectiveFormComponent;
  let fixture: ComponentFixture<RectiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
