import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filmes-form',
  templateUrl: './filmes-form.component.html',
  styleUrls: ['./filmes-form.component.scss']
})
export class FilmesFormComponent implements OnInit {

  public filmeForm: FormGroup;
  public dateFormat = 'dd/MM/yyyy';
  public id: number;

  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  private iniciarForm() {
    this.filmeForm = this.fb.group({

      id_filme: ['',[Validators.required]],
      tipo_produto: ['',[Validators.required]],
      tipo_filme: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      atores: [''],
      diretores: [''],
      fornecedor: [''],
      idioma: [''],
      valor_locacao: ['', [Validators.required]],
      data_cadastro: ['', [Validators.required]],

    })
  }

  submit(){

  }

  public voltarListagem() {
    this.router.navigate(['/filmes'])
  }



}
