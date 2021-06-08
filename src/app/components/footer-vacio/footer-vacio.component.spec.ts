import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterVacioComponent } from './footer-vacio.component';

describe('FooterVacioComponent', () => {
  let component: FooterVacioComponent;
  let fixture: ComponentFixture<FooterVacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterVacioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterVacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
