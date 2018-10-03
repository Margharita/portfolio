import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSliderComponent } from './custom-slider.component';

describe('CustomSliderComponent', () => {
  let component: CustomSliderComponent;
  let fixture: ComponentFixture<CustomSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
