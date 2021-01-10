import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroCardComponent } from './metro-card.component';

describe('MetroCardComponent', () => {
  let component: MetroCardComponent;
  let fixture: ComponentFixture<MetroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetroCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
