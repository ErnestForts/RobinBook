import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNuevoLugarComponent } from './header-nuevo-lugar.component';

describe('HeaderNuevoLugarComponent', () => {
  let component: HeaderNuevoLugarComponent;
  let fixture: ComponentFixture<HeaderNuevoLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNuevoLugarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNuevoLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
