import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockReplenishmentComponent } from './stock-replenishment.component';

describe('StockReplenishmentComponent', () => {
  let component: StockReplenishmentComponent;
  let fixture: ComponentFixture<StockReplenishmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockReplenishmentComponent]
    });
    fixture = TestBed.createComponent(StockReplenishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
