import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceHomeComponent } from './invoicehome.component';

describe('InvoiceHomeComponent', () => {
  let component: InvoiceHomeComponent;
  let fixture: ComponentFixture<InvoiceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
