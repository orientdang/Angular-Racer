import { Pipe, PipeTransform } from "@angular/core";
import { FlagService } from "../services/flag.service";
import { Countries } from "../services/contries.js";
@Pipe({
  name: "flagicon"
})
export class FlagiconPipe implements PipeTransform {
  // private flag: any[];

  private countries = Countries;

  private flagCode: any;

  constructor(private flagService: FlagService) {
    console.log(this.countries);
  }

  transform(value: any, args?: any): any {
    const flag = this.countries.find((country: any) => {
      return country.Nationality === value;
    });
    console.log(flag);
    if (flag) {
      return flag.Code.toLowerCase();
    } else {
      return "vn";
    }
  }
}
