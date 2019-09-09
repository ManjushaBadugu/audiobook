import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianBestSellersComponent } from './indian-best-sellers.component';

describe('IndianBestSellersComponent', () => {
  let component: IndianBestSellersComponent;
  let fixture: ComponentFixture<IndianBestSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianBestSellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianBestSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
