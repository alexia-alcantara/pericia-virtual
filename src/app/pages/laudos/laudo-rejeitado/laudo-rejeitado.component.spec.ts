import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaudoRejeitadoComponent } from './laudo-rejeitado.component';

describe('LaudoRejeitadoComponent', () => {
  let component: LaudoRejeitadoComponent;
  let fixture: ComponentFixture<LaudoRejeitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaudoRejeitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaudoRejeitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
