import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicGatesPracticeComponent } from './quiz.component';

describe('TransistorModuleComponent', () => {
  let component: LogicGatesPracticeComponent;
  let fixture: ComponentFixture<LogicGatesPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogicGatesPracticeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicGatesPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
