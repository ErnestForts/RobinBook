import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilRankingComponent } from './perfil-ranking.component';

describe('PerfilRankingComponent', () => {
  let component: PerfilRankingComponent;
  let fixture: ComponentFixture<PerfilRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
