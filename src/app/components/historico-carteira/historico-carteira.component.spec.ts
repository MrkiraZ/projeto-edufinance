import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoCarteiraComponent } from './historico-carteira.component';

describe('HistoricoCarteiraComponent', () => {
  let component: HistoricoCarteiraComponent;
  let fixture: ComponentFixture<HistoricoCarteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoCarteiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
