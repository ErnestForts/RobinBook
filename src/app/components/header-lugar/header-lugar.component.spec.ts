import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLugarComponent } from './header-lugar.component';

describe('HeaderLugarComponent', () => {
  let component: HeaderLugarComponent;
  let fixture: ComponentFixture<HeaderLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLugarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
