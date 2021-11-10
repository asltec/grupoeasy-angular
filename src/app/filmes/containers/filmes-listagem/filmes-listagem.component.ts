import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filmes } from '../../models/filmes';


@Component({
  selector: 'app-filmes-listagem',
  templateUrl: './filmes-listagem.component.html',
  styleUrls: ['./filmes-listagem.component.scss']
})
export class FilmesListagemComponent implements OnInit {

  public filmes = filmes;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public async acessarRotaCadastro() {
    this.router.navigate([`filmes/cadastro`]);
}

}
