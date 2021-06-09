import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFavoritosComponent } from './header-favoritos.component';

describe('HeaderFavoritosComponent', () => {
  let component: HeaderFavoritosComponent;
  let fixture: ComponentFixture<HeaderFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
