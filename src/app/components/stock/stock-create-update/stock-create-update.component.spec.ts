import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCreateUpdateComponent } from './stock-create-update.component';

describe('StockCreateUpdateComponent', () => {
  let component: StockCreateUpdateComponent;
  let fixture: ComponentFixture<StockCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(StockCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
