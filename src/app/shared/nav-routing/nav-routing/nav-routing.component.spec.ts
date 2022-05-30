import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRoutingComponent } from './nav-routing.component';

describe('NavRoutingComponent', () => {
  let component: NavRoutingComponent;
  let fixture: ComponentFixture<NavRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
