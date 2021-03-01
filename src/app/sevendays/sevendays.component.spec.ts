import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenDaysComponent } from './sevendays.component';

describe('SevenDaysComponent', () => {
  let component: SevenDaysComponent;
  let fixture: ComponentFixture<SevenDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevenDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
