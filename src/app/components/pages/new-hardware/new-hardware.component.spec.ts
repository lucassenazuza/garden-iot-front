import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHardwareComponent } from './new-hardware.component';

describe('NewHardwareComponent', () => {
  let component: NewHardwareComponent;
  let fixture: ComponentFixture<NewHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
