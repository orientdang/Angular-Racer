import { Pipe, PipeTransform } from "@angular/core";
import { FlagService } from "../services/flag.service";
import { Countries } from "../services/contries.js";
@Pipe({
  name: "flagicon"
})
export class FlagiconPipe implements PipeTransform {
  // private flag: any[];

  private countries = Countries;

  transform(value: any, args?: any): any {
    const flag = this.countries.find((country: any) => {
      return country.Nationality === value;
    });
    if (flag) {
      return flag.Code.toLowerCase();
    } else {
      return "vn";
    }
  }
}
