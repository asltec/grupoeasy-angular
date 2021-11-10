import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FilmesFormComponent } from "./containers/filmes-form/filmes-form.component";
import { FilmesListagemComponent } from "./containers/filmes-listagem/filmes-listagem.component";

const routes: Routes = [
    {
        path: '',
        component: FilmesListagemComponent
    },
    {
        path: 'cadastro',
        component: FilmesFormComponent
    }, {
        path: ':id/alterar',
        component: FilmesFormComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FilmesRoutingModule {

}