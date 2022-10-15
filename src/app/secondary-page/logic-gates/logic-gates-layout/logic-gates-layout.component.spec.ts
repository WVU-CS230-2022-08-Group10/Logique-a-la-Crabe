import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicGatesLayoutComponent } from './logic-gates-layout.component';

describe('LogicGatesLayoutComponent', () => {
  let component: LogicGatesLayoutComponent;
  let fixture: ComponentFixture<LogicGatesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicGatesLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicGatesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
