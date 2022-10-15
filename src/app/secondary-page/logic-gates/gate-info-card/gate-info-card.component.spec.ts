import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateInfoCardComponent } from './gate-info-card.component';

describe('GateInfoCardComponent', () => {
  let component: GateInfoCardComponent;
  let fixture: ComponentFixture<GateInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GateInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GateInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
