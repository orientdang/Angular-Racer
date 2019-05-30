import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { RacerService } from "src/app/services/racer.service";

@Component({
  selector: "app-racer-detail",
  templateUrl: "./racer-detail.component.html",
  styleUrls: ["./racer-detail.component.scss"]
})
export class RacerDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private racer: RacerService) {}

  public displayedColumns: string[] = [
    "round",
    "raceName",
    "team",
    "grid",
    "race"
  ];
  public doneLoading: boolean;
  public driverID: string;
  public driverStandings: any;
  public races: any[];

  ngOnInit() {
    this.doneLoading = false;
    this.getDriverIdFromParam();
    this.getRacerDetailFromService(this.driverID);
    this.getRacerRacesFromService(this.driverID);
  }

  getDriverIdFromParam() {
    this.route.paramMap.subscribe((p: ParamMap) => {
      this.driverID = p.get("driverID");
    });
  }

  getRacerDetailFromService(driverID: string) {
    this.racer.getRacerDetail(driverID).subscribe((data: any) => {
      if (data) {
        this.driverStandings =
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
      }
    });
  }

  getRacerRacesFromService(driverID: string) {
    this.racer.getRacerRaces(driverID).subscribe(
      (data: any) => {
        if (data) {
          this.races = data.MRData.RaceTable.Races;
        }
      },
      (err: any) => {
        console.log(err);
      },
      () => {
        this.doneLoading = true;
      }
    );
  }
}
