import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesListagemComponent } from './filmes-listagem.component';

describe('FilmesListagemComponent', () => {
  let component: FilmesListagemComponent;
  let fixture: ComponentFixture<FilmesListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmesListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
