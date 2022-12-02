import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiseModuleComponent } from './noise-margins.component';

describe('TransistorModuleComponent', () => {
  let component: NoiseModuleComponent;
  let fixture: ComponentFixture<NoiseModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoiseModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiseModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
