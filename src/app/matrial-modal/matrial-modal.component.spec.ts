import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrialModalComponent } from './matrial-modal.component';

describe('MatrialModalComponent', () => {
  let component: MatrialModalComponent;
  let fixture: ComponentFixture<MatrialModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrialModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrialModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
