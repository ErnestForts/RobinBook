import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDetalleLibrosComponent } from './header-detalle-libros.component';

describe('HeaderDetalleLibrosComponent', () => {
  let component: HeaderDetalleLibrosComponent;
  let fixture: ComponentFixture<HeaderDetalleLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDetalleLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDetalleLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
