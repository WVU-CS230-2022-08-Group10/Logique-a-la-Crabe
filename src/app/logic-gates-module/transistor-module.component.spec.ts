import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransistorModuleComponent } from './transistor-module.component';

describe('TransistorModuleComponent', () => {
  let component: TransistorModuleComponent;
  let fixture: ComponentFixture<TransistorModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransistorModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransistorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
