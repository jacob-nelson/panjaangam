import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'panjaangam',
  templateUrl: './panjaangam.component.html',
  styleUrls: ['./panjaangam.component.css']
})
export class PanjaangamComponent implements OnInit {
  @Input()
  format: string;

  daysLong: String[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  daysShort: String[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  monthsLong: String[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  monthsShort: String[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  days: String[];
  months: String[];
  monthIndex: number;
  month: String;
  monthList: String;
  selectedMonth: String;
  year: number;
  numberOfDays: number;
  d: Date;
  today: number;
  dates: number[];
  dateRows: {};

  constructor() {
    this.d = new Date();
    this.days = this.daysLong;
    this.months = this.monthsLong;
    this.monthIndex = this.d.getMonth();
    this.year = this.d.getFullYear();
    this.month = this.monthsLong[this.monthIndex];
    this.selectedMonth = this.monthsLong[this.monthIndex];
    this.setNumberOfDays();
    this.dates = this.generateDates(this.numberOfDays);
    this.dateRows = this.generateDateRows(this.dates);
    this.today = this.d.getDate();
  }

  ngOnInit() {
    if (this.format == "short") {
      this.days = this.daysShort;
      this.months = this.monthsShort;
      this.month = this.monthsShort[this.monthIndex];
      this.selectedMonth = this.monthsShort[this.monthIndex];
      this.monthList = this.selectedMonth;
    }
  }

  redrawCalendar(selectedMonth){
    this.selectedMonth = selectedMonth;
    this.setMonthIndex();
    this.setNumberOfDays();
    this.dates = this.generateDates(this.numberOfDays);
    this.dateRows = this.generateDateRows(this.dates);
    console.log(this.monthsShort.indexOf(selectedMonth))
  }

  setMonthIndex(){
    this.monthIndex = this.monthsShort.indexOf(this.selectedMonth);
  }

  setNumberOfDays(){
    this.numberOfDays = new Date(this.year, this.monthIndex + 1, 0).getDate();
  }

  /* This method will return the index of week day in which the month starts. */
  getFirstDayOfMonth() {
    const now = new Date(this.year, this.monthIndex);
    return new Date(now.getFullYear(), now.getMonth()).getDay();
  }

  generateDates(numberOfDays) {
    let dates = [];
    var startDay = this.getFirstDayOfMonth();

    for (var i = 0; i < startDay; i++) {
      dates.push("");
    }

    for (var i = 1; i <= numberOfDays; i++) {
      dates.push(i);
    }

    while (dates.length % 7 !== 0) {
      dates.push("");
    }

    return dates;
  }

  generateDateRows(dates) {
    var row = 0;
    var dateRows = {};

    for (var i = 0; i < dates.length; i++) {
      if (i % 7 === 0) {
        row++;
        dateRows[row] = [];
      }
      dateRows[row].push(dates[i]);
    }

    return dateRows;
  }

}
