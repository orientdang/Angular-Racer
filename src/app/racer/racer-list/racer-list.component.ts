import { Component, OnInit, ViewChild } from "@angular/core";
import { RacerService } from "src/app/services/racer.service";
import { MatSort, MatTableDataSource } from "@angular/material";
import { FilterPipe } from "../../pipes/filter.pipe";
@Component({
  selector: "app-racer-list",
  templateUrl: "./racer-list.component.html",
  styleUrls: ["./racer-list.component.scss"]
})
export class RacerListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = [
    "position",
    "nationality",
    "name",
    "team",
    "point"
  ];
  driverStandings: any;
  dataSource: MatTableDataSource<any>;
  inputSeason: number;
  currentSeason = 2019;
  filterText: string;
  constructor(private racerListService: RacerService) {}
  ngOnInit() {
    this.getRacerListFromService(this.currentSeason);
    // console.log(this.driverStandings);
  }

  getRacerListFromService(season: number) {
    let driverStandings: any;
    this.racerListService.getRacerList(season).subscribe(
      (res: any) => {
        if (res) {
          driverStandings =
            res.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        }
      },
      (err: any) => {},
      () => {
        this.driverStandings = driverStandings;
        this.dataSource = new MatTableDataSource(this.driverStandings);
        this.dataSource.sort = this.sort;
        this.dataSource.sort.active = "nationality  ";
        console.log(this.dataSource);
        console.log(this.sort);
      }
    );
  }

  filterBySeason(event: any) {
    // reset data
    this.clearData();
    const inputSeason = event.target.value;
    console.log(inputSeason);
    this.getRacerListFromService(inputSeason);
  }

  handleBadRequest(response: any) {
    const standingsLists = response.MRData.StandingsTable.StandingsLists[0];
    return standingsLists ? true : false;
  }

  sortChange(e) {
    console.log(e);
  }
  clearData() {
    // this.dataSource.splice(0);
  }
}
