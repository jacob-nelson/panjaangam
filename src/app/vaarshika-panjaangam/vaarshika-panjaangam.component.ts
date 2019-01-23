import {
  Component,
  Input,
  OnInit,
  //Renderer
} from '@angular/core';

@Component({
  selector: 'vaarshika-panjaangam',
  templateUrl: './vaarshika-panjaangam.component.html',
  styleUrls: ['./vaarshika-panjaangam.component.css']
})
export class VaarshikaPanjaangamComponent implements OnInit {
  @Input()
  format: string;

  daysLong: String[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  daysShort: String[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  monthsLong: String[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  monthsShort: String[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  d: Date;
  days: String[];
  months: String[];
  month: String;
  monthsDisplay: any[] = [];
  numberOfDays: number;
  years: number[] = [];  //range of years
  selectedYear: number;
  year: number;
  monthlyDates: number[] = [];
  today: number;

  constructor(
    //private render:Renderer
    ) {
    this.d = new Date();
    this.days = this.daysLong;
    this.months = this.monthsLong;
    //setting current year as selected year while initializing calendar
    
    this.year = this.selectedYear = this.d.getFullYear();  
    this.today = this.d.getDate();
    this.setYearRange();
    this.redrawCalendar(this.selectedYear);
  }

  ngOnInit() {
    if (this.format == "short") {
      this.days = this.daysShort;
      this.months = this.monthsShort;
    }
    this.month = this.months[this.d.getMonth()];  //current month
    this.setMonthsDisplay(); 
  }

  setMonthsDisplay() {
    var monthsRow = [];
    var row = 0;
    for (var i = 0; i < this.months.length; i++) {
      monthsRow.push(this.months[i]);
      if ((i + 1) % 3 == 0) {
        this.monthsDisplay[row] = monthsRow;
        monthsRow = [];

        row++;
      }

    }
  }

  redrawCalendar(selectedYear) {
    var numberOfDays;
    var dates;
    var dateRows;
    this.selectedYear = selectedYear;
    this.setYearRange();
    this.monthlyDates = [];
    for(var i=0; i<12; i++){
      numberOfDays = this.setNumberOfDays(i);
      dates = this.generateDates(numberOfDays, i);
      dateRows = this.generateDateRows(dates);
      var mnth: any = this.months[i];
      this.monthlyDates.push(dateRows);
    }
  }

  setYearRange(){
    let startIndex = +this.selectedYear - 5;
    let stopIndex = +this.selectedYear + 5;  // this is to convert to interger. this.selectedYear is actually a string.
    this.years = [];
    for(var i = startIndex; i <= stopIndex; i++){
      this.years.push(i);
    }
  }

  setNumberOfDays(monthIndex) {
    return new Date(this.selectedYear, monthIndex + 1, 0).getDate();
  }

  getFirstDayOfMonth(monthIndex) {
    const now = new Date(this.selectedYear, monthIndex);
    return new Date(now.getFullYear(), now.getMonth()).getDay();
  }

  generateDates(numberOfDays, monthIndex) {
    let dates = [];
    var startDay = this.getFirstDayOfMonth(monthIndex);

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

  getDateRows(month){
    var monthIndex = this.months.indexOf(month);
    return this.monthlyDates[monthIndex];
  }

  selectADate(event:any){
    //event.preventDefault()
    //this.render.setElementClass(event.target,"text-danger",false);
    console.log("selectADate => ", JSON.stringify(event))
  }

}
