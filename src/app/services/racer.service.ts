import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RacerService {
  constructor(private http: HttpClient) {}

  getRacerList(season) {
    return this.http.get(
      `http://ergast.com/api/f1/${season}/driverStandings.json`
    );
  }

  getRacerDetail(driverID: string) {
    return this.http.get(
      `http://ergast.com/api/f1/2013/drivers/${driverID}/driverStandings.json`
    );
  }

  getRacerRaces(driverID: string) {
    return this.http.get(
      `http://ergast.com/api/f1/2013/drivers/${driverID}/results.json`
    );
  }
}
