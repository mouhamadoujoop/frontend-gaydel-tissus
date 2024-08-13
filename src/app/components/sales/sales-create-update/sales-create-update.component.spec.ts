import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCreateUpdateComponent } from './sales-create-update.component';

describe('SalesCreateUpdateComponent', () => {
  let component: SalesCreateUpdateComponent;
  let fixture: ComponentFixture<SalesCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(SalesCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
