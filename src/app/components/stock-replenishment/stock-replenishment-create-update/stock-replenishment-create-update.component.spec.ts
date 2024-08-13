import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockReplenishmentCreateUpdateComponent } from './stock-replenishment-create-update.component';

describe('StockReplenishmentCreateUpdateComponent', () => {
  let component: StockReplenishmentCreateUpdateComponent;
  let fixture: ComponentFixture<StockReplenishmentCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockReplenishmentCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(StockReplenishmentCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
