import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNosotrosComponent } from './header-nosotros.component';

describe('HeaderNosotrosComponent', () => {
  let component: HeaderNosotrosComponent;
  let fixture: ComponentFixture<HeaderNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
