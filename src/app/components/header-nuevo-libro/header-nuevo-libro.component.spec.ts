import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNuevoLibroComponent } from './header-nuevo-libro.component';

describe('HeaderNuevoLibroComponent', () => {
  let component: HeaderNuevoLibroComponent;
  let fixture: ComponentFixture<HeaderNuevoLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNuevoLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNuevoLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
