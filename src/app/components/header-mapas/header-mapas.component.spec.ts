import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMapasComponent } from './header-mapas.component';

describe('HeaderMapasComponent', () => {
  let component: HeaderMapasComponent;
  let fixture: ComponentFixture<HeaderMapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMapasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
