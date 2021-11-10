import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filmes } from '../../models/filmes';

@Component({
  selector: 'app-filmes-list',
  templateUrl: './filmes-list.component.html',
  styleUrls: ['./filmes-list.component.scss']
})
export class FilmesListComponent implements OnInit {

  @Input() filmes: Filmes[] = [];
  @Output() editar = new EventEmitter<any>();
  @Output() remover = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
