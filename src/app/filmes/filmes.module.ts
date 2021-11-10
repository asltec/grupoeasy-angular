import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CompartilhadoModule } from "../compartilhado/compartilhado.module";
import { FilmesListComponent } from "./components/filmes-list/filmes-list.component";
import { FilmesListagemComponent } from "./containers/filmes-listagem/filmes-listagem.component";
import { FilmesRoutingModule } from "./filmes-routing.module";
import { FilmesFormComponent } from './containers/filmes-form/filmes-form.component';

@NgModule({
    declarations: [
        FilmesListComponent,
        FilmesListagemComponent,
        FilmesFormComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CompartilhadoModule,
        FilmesRoutingModule
    ]
})
export class FilmesModule{

}