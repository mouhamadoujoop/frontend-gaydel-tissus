import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCreateUpdateComponent } from './products-create-update.component';

describe('ProductsCreateUpdateComponent', () => {
  let component: ProductsCreateUpdateComponent;
  let fixture: ComponentFixture<ProductsCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(ProductsCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
