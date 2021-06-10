import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoLugarComponent } from './nuevo-lugar.component';

describe('NuevoLugarComponent', () => {
  let component: NuevoLugarComponent;
  let fixture: ComponentFixture<NuevoLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoLugarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
