import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RacerListComponent } from "./racer-list/racer-list.component";
import { RacerDetailComponent } from "./racer-detail/racer-detail.component";
import { MatSortModule } from "@angular/material/sort";
import { FormsModule } from "@angular/forms";
import { PipesModule } from "../pipes/pipes.module";
import { MatGridListModule } from "@angular/material/grid-list";
@NgModule({
  declarations: [RacerListComponent, RacerDetailComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatGridListModule,
    PipesModule
  ],
  exports: [RacerListComponent, RacerDetailComponent]
})
export class RacerModule {}
