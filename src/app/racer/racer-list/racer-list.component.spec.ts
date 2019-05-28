import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacerListComponent } from './racer-list.component';

describe('RacerListComponent', () => {
  let component: RacerListComponent;
  let fixture: ComponentFixture<RacerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
