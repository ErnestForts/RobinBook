import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRegisterArrowComponent } from './header-register-arrow.component';

describe('HeaderRegisterArrowComponent', () => {
  let component: HeaderRegisterArrowComponent;
  let fixture: ComponentFixture<HeaderRegisterArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderRegisterArrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRegisterArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
