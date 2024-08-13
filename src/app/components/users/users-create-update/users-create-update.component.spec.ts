import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCreateUpdateComponent } from './users-create-update.component';

describe('UsersCreateUpdateComponent', () => {
  let component: UsersCreateUpdateComponent;
  let fixture: ComponentFixture<UsersCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(UsersCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
