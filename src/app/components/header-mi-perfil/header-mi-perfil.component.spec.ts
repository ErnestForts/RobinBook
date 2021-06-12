import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMiPerfilComponent } from './header-mi-perfil.component';

describe('HeaderMiPerfilComponent', () => {
  let component: HeaderMiPerfilComponent;
  let fixture: ComponentFixture<HeaderMiPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMiPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMiPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
