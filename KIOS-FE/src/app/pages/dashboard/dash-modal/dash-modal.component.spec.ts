import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashModalComponent } from './dash-modal.component';

describe('DashModalComponent', () => {
  let component: DashModalComponent;
  let fixture: ComponentFixture<DashModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
