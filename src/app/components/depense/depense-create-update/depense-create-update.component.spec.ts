import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepenseCreateUpdateComponent } from './depense-create-update.component';

describe('DepenseCreateUpdateComponent', () => {
  let component: DepenseCreateUpdateComponent;
  let fixture: ComponentFixture<DepenseCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepenseCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(DepenseCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
