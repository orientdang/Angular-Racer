import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterPipe } from "./filter.pipe";
import { FlagiconPipe } from "./flagicon.pipe";

@NgModule({
  declarations: [FilterPipe, FlagiconPipe],
  imports: [CommonModule],
  exports: [FilterPipe, FlagiconPipe]
})
export class PipesModule {}
