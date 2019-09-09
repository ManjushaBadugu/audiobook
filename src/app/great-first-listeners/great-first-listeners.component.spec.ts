import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatFirstListenersComponent } from './great-first-listeners.component';

describe('GreatFirstListenersComponent', () => {
  let component: GreatFirstListenersComponent;
  let fixture: ComponentFixture<GreatFirstListenersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreatFirstListenersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatFirstListenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
