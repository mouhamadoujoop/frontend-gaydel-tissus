import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSaleCreateUpdateComponent } from './new-sale-create-update.component';

describe('NewSaleCreateUpdateComponent', () => {
  let component: NewSaleCreateUpdateComponent;
  let fixture: ComponentFixture<NewSaleCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSaleCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(NewSaleCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
