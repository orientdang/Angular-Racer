import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(dataTable: any): any {
    dataTable.data = dataTable.data.filter((data: any) => {
      return data.Driver.nationality === "am";
    });
    console.log(dataTable);
    return dataTable;
  }
}
