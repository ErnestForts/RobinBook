import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLibrosComponent } from './header-libros.component';

describe('HeaderLibrosComponent', () => {
  let component: HeaderLibrosComponent;
  let fixture: ComponentFixture<HeaderLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
