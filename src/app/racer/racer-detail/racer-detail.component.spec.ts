import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacerDetailComponent } from './racer-detail.component';

describe('RacerDetailComponent', () => {
  let component: RacerDetailComponent;
  let fixture: ComponentFixture<RacerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
