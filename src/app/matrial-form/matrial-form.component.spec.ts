import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrialFormComponent } from './matrial-form.component';

describe('MatrialFormComponent', () => {
  let component: MatrialFormComponent;
  let fixture: ComponentFixture<MatrialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrialFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
