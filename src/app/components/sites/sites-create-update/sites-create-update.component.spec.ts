import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesCreateUpdateComponent } from './sites-create-update.component';

describe('SitesCreateUpdateComponent', () => {
  let component: SitesCreateUpdateComponent;
  let fixture: ComponentFixture<SitesCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SitesCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(SitesCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
