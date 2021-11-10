import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FilmesListagemComponent } from "./containers/filmes-listagem/filmes-listagem.component";

const routes: Routes = [
    {
        path: '',
        component: FilmesListagemComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FilmesRoutingModule {

}