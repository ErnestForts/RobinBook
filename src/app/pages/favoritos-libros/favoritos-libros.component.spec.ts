import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosLibrosComponent } from './favoritos-libros.component';

describe('FavoritosLibrosComponent', () => {
  let component: FavoritosLibrosComponent;
  let fixture: ComponentFixture<FavoritosLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritosLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritosLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
