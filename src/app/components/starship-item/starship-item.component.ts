import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'starship-item',
  templateUrl: './starship-item.component.html',
  styleUrls: ['./starship-item.component.scss']
})
export class StarshipItemComponent implements OnInit {
  @Input() distanceMGLT: number;
  @Input() starship: any;

  constructor() { }

  ngOnInit() {
  }

  get stop(): number {
    let years: number = 0,
        months: number = 0,
        weeks: number = 0,
        days: number = 0,
        autonomy: number = 0,
        stop: number = 0,
        unit: string;

    unit = "years";
    if (this.starship.consumables.toString().indexOf(unit) > 0) {
      years = parseInt(this.starship.consumables.toString().replace(" " + unit, ""));
      months = years * 12;
      days = months * 30;
    } else {
      unit = "year";
      if (this.starship.consumables.toString().indexOf(unit) > 0) {
        years = parseInt(this.starship.consumables.toString().replace(" " + unit, ""));
        months = years * 12;
        days = months * 30;
      } else {
        unit = "months";
        if (this.starship.consumables.toString().indexOf(unit) > 0) {
          months = parseInt(this.starship.consumables.toString().replace(" " + unit, ""));
          days = months * 30;
        } else {
          unit = "month";
          if (this.starship.consumables.toString().indexOf(unit) > 0) {
            months = parseInt(this.starship.consumables.toString().replace(" " + unit, ""));
            days = months * 30;
          } else {
            unit = "weeks";
            if (this.starship.consumables.toString().indexOf(unit) > 0) {
              weeks = parseInt(this.starship.consumables.toString().replace(" " + unit, ""));
              days = weeks * 7;
            } else {
              unit = "week";
              if (this.starship.consumables.toString().indexOf(unit) > 0) {
                weeks = parseInt(this.starship.consumables.toString().replace(" " + unit, ""));
                days = weeks * 7;
              } else {
                unit = "days";
                if (this.starship.consumables.toString().indexOf(unit) > 0) {
                  days = parseInt(this.starship.consumables.toString().replace(" " + unit, ""));
                } else {
                  unit = "day";
                  if (this.starship.consumables.toString().indexOf(unit) > 0) {
                    days = parseInt(this.starship.consumables.toString().replace(" " + unit, ""));
                  } 
                }
              }
            }
          }
        }
      }
    } 
    autonomy = parseFloat(this.starship.MGLT) * 24 * days;
    stop = Math.round(this.distanceMGLT / autonomy);
    return stop;
  }

  hasInformation(){
    return parseFloat(this.starship.MGLT) > 0;
  }


}
