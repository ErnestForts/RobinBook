import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresFavoritosComponent } from './lugares-favoritos.component';

describe('LugaresFavoritosComponent', () => {
  let component: LugaresFavoritosComponent;
  let fixture: ComponentFixture<LugaresFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugaresFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
