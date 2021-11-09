import { NgModule } from "@angular/core";
import { CompartilhadoModule } from "../compartilhado/compartilhado.module";
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { HomeRoutingModule } from "./home-routing.module";


@NgModule({
    declarations: [
    HomeDashboardComponent
  ],
    imports: [
        CompartilhadoModule,
        HomeRoutingModule
    ],
    exports:[
      HomeDashboardComponent
    ]
})
export class HomeModule {

}