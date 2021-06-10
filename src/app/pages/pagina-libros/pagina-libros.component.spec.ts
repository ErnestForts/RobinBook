import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaLibrosComponent } from './pagina-libros.component';

describe('PaginaLibrosComponent', () => {
  let component: PaginaLibrosComponent;
  let fixture: ComponentFixture<PaginaLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
