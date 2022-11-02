import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHardwareComponent } from './search-hardware.component';

describe('SearchHardwareComponent', () => {
  let component: SearchHardwareComponent;
  let fixture: ComponentFixture<SearchHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
