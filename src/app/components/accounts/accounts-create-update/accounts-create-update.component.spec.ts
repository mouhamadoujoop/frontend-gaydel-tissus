import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsCreateUpdateComponent } from './accounts-create-update.component';

describe('AccountsCreateUpdateComponent', () => {
  let component: AccountsCreateUpdateComponent;
  let fixture: ComponentFixture<AccountsCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountsCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(AccountsCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
