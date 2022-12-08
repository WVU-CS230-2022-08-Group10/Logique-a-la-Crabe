import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleListPageComponent } from './module-list-page.component';

describe('ModuleListPageComponent', () => {
  let component: ModuleListPageComponent;
  let fixture: ComponentFixture<ModuleListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
