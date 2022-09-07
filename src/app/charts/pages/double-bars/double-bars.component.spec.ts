import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleBarsComponent } from './double-bars.component';

describe('DoubleBarsComponent', () => {
  let component: DoubleBarsComponent;
  let fixture: ComponentFixture<DoubleBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
