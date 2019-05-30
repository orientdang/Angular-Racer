import { TestBed } from "@angular/core/testing";

import { RacerService } from "./racer.service";

describe("RacerService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: RacerService = TestBed.get(RacerService);
    expect(service).toBeTruthy();
  });
});
