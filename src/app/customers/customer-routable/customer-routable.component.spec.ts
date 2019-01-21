import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRoutableComponent } from './customer-routable.component';

describe('CustomerRoutableComponent', () => {
  let component: CustomerRoutableComponent;
  let fixture: ComponentFixture<CustomerRoutableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRoutableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRoutableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
