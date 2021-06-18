import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastFavoritosComponent } from './toast-favoritos.component';

describe('ToastFavoritosComponent', () => {
  let component: ToastFavoritosComponent;
  let fixture: ComponentFixture<ToastFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
