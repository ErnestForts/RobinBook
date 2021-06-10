import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMisChatsComponent } from './header-mis-chats.component';

describe('HeaderMisChatsComponent', () => {
  let component: HeaderMisChatsComponent;
  let fixture: ComponentFixture<HeaderMisChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMisChatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMisChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
