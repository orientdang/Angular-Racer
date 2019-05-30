import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FlagService {
  constructor(private http: HttpClient) {}

  getFlagByName() {
    return fetch(`./contries.json`);
  }
}
