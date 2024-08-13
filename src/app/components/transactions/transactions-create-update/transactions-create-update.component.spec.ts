import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsCreateUpdateComponent } from './transactions-create-update.component';

describe('TransactionsCreateUpdateComponent', () => {
  let component: TransactionsCreateUpdateComponent;
  let fixture: ComponentFixture<TransactionsCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(TransactionsCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
