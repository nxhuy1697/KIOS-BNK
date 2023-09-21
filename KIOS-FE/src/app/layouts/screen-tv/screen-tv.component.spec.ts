import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTvComponent } from './screen-tv.component';

describe('ScreenTvComponent', () => {
  let component: ScreenTvComponent;
  let fixture: ComponentFixture<ScreenTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
