import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTvModalComponent } from './screen-tv-modal.component';

describe('ScreenTvModalComponent', () => {
  let component: ScreenTvModalComponent;
  let fixture: ComponentFixture<ScreenTvModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTvModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenTvModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
