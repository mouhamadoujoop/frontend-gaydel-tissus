import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementCreateUpdateComponent } from './versement-create-update.component';

describe('VersementCreateUpdateComponent', () => {
  let component: VersementCreateUpdateComponent;
  let fixture: ComponentFixture<VersementCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VersementCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(VersementCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
