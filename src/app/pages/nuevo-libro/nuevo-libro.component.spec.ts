import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoLibroComponent } from './nuevo-libro.component';

describe('NuevoLibroComponent', () => {
  let component: NuevoLibroComponent;
  let fixture: ComponentFixture<NuevoLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
