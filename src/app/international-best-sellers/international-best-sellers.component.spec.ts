import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalBestSellersComponent } from './international-best-sellers.component';

describe('InternationalBestSellersComponent', () => {
  let component: InternationalBestSellersComponent;
  let fixture: ComponentFixture<InternationalBestSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalBestSellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalBestSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
