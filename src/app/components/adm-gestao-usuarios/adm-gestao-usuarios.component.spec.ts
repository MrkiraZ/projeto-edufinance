import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmGestaoUsuariosComponent } from './adm-gestao-usuarios.component';

describe('AdmGestaoUsuariosComponent', () => {
  let component: AdmGestaoUsuariosComponent;
  let fixture: ComponentFixture<AdmGestaoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmGestaoUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmGestaoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
