import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCorsesComponent } from './available-corses.component';

describe('AvailableCorsesComponent', () => {
  let component: AvailableCorsesComponent;
  let fixture: ComponentFixture<AvailableCorsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableCorsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCorsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
