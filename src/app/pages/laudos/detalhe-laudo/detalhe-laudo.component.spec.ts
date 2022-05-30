import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheLaudoComponent } from './detalhe-laudo.component';

describe('DetalheLaudoComponent', () => {
  let component: DetalheLaudoComponent;
  let fixture: ComponentFixture<DetalheLaudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheLaudoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheLaudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
