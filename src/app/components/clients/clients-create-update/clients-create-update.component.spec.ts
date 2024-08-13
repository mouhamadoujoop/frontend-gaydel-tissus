import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCreateUpdateComponent } from './clients-create-update.component';

describe('ClientsCreateUpdateComponent', () => {
  let component: ClientsCreateUpdateComponent;
  let fixture: ComponentFixture<ClientsCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(ClientsCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
