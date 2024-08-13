import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTransferCreateUpdateComponent } from './stock-transfer-create-update.component';

describe('StockTransferCreateUpdateComponent', () => {
  let component: StockTransferCreateUpdateComponent;
  let fixture: ComponentFixture<StockTransferCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockTransferCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(StockTransferCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
