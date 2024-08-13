import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSaleComponent } from './current-sale.component';

describe('CurrentSaleComponent', () => {
  let component: CurrentSaleComponent;
  let fixture: ComponentFixture<CurrentSaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentSaleComponent]
    });
    fixture = TestBed.createComponent(CurrentSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
