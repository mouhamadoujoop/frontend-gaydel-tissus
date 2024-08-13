import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesCreateUpdateComponent } from './roles-create-update.component';

describe('RolesCreateUpdateComponent', () => {
  let component: RolesCreateUpdateComponent;
  let fixture: ComponentFixture<RolesCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolesCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(RolesCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
