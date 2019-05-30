import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RacerListComponent } from "./racer/racer-list/racer-list.component";
import { RacerDetailComponent } from "./racer/racer-detail/racer-detail.component";

const routes: Routes = [
  {
    path: "",
    component: RacerListComponent
  },
  {
    path: "detail/:driverID",
    component: RacerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
