import { Component, OnInit, ViewChild } from "@angular/core";
import { RacerService } from "src/app/services/racer.service";
import { MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
@Component({
  selector: "app-racer-list",
  templateUrl: "./racer-list.component.html",
  styleUrls: ["./racer-list.component.scss"]
})
export class RacerListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  public displayedColumns: string[] = [
    "position",
    "nationality",
    "name",
    "team",
    "point"
  ];
  public driverStandings: any;
  public dataSource: MatTableDataSource<any>;
  public inputSeason: number;
  public currentSeason = 2019;
  public filterText: string;
  public doneLoading = false;

  constructor(private racerListService: RacerService, private router: Router) {}

  ngOnInit() {
    this.getRacerListFromService(this.currentSeason);
  }

  getRacerListFromService(season: number) {
    this.racerListService.getRacerList(season).subscribe(
      (res: any) => {
        if (res) {
          this.driverStandings =
            res.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        }
      },
      (err: any) => {},
      () => {
        this.dataSource = new MatTableDataSource(this.driverStandings);
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
        this.doneLoading = true;
        this.configFilter();
      }
    );
  }

  filterBySeason(event: any) {
    const inputSeason = event.target.value;
    this.doneLoading = false;
    this.getRacerListFromService(inputSeason);
  }

  handleBadRequest(response: any) {
    const standingsLists = response.MRData.StandingsTable.StandingsLists[0];
    return standingsLists ? true : false;
  }

  configFilter() {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const byID = data.Driver.driverId.indexOf(filter) !== -1;

      const byGivenName =
        data.Driver.givenName.toLowerCase().indexOf(filter) !== -1;

      const byFamilyName =
        data.Driver.familyName.toLowerCase().indexOf(filter) !== -1;

      const byNation =
        data.Driver.nationality.toLowerCase().indexOf(filter) !== -1;

      const byPoint = data.points.indexOf(filter) !== -1;

      const byTeam =
        data.Constructors[0].name.toLowerCase().indexOf(filter) !== -1;

      return (
        byNation || byFamilyName || byGivenName || byPoint || byID || byTeam
      );
    };
  }

  handleFilter(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

  navigateToDetail(driverID: any) {
    this.router.navigate(["/detail", driverID]);
  }
}
