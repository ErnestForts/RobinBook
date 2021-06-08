import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLugaresFavoritosComponent } from './header-lugares-favoritos.component';

describe('HeaderLugaresFavoritosComponent', () => {
  let component: HeaderLugaresFavoritosComponent;
  let fixture: ComponentFixture<HeaderLugaresFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLugaresFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLugaresFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
