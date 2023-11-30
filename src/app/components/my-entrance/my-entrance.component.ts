import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import moment from 'moment';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-my-entrance',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatListModule, MatIconModule],
  templateUrl: './my-entrance.component.html',
  styleUrl: './my-entrance.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,

})
export class MyEntranceComponent implements OnInit, OnChanges {

  @Input() entranceList: any = [];
  @Input() startTime!: string;
  @Input() endTime!: string;
  @Input() NumOfVisitors!: number;
  startTimeChoose = "";
  filteredEvents: any[] = [];
  selectedEvent: any;


  constructor(private router: Router,
  ) {

  }
  ngOnInit(): void {
    this.filterEventsByTime();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('entranceList' in changes || 'startTime' in changes || 'endTime' in changes) {
      this.filterEventsByTime();
    }
  }

  selectedItemIndex: number | null = null;
  selectItem(index: number): void {
    this.selectedItemIndex = index;
  }

  filterEventsByTime() {
    const startMinutes = this.convertTimeToMinutes(this.startTime);
    const endMinutes = this.convertTimeToMinutes(this.endTime);

    this.filteredEvents = this.entranceList.filter((event: any) => {
      const eventTime = this.convertTimeToMinutes(event.startTime);
      return eventTime >= startMinutes && eventTime < endMinutes;
    });

  }

  convertTimeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
  chooseTime(event: any) {
    if (event.availablePlaces > 0 && !event.isClosed && this.NumOfVisitors <= event.availablePlaces) {
      this.startTimeChoose = event.startTime
    }
    else {
      this.startTimeChoose = "9999"


    }
  }
  navigateToApprovalPage() {
    if (this.startTimeChoose.length > 0 && this.startTimeChoose != "9999") {
      this.router.navigate(['/approval-invite']);
      const queryParams = { numOfVisitors: this.NumOfVisitors, time: this.startTimeChoose };
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/approval-invite'], { queryParams });
      });

    }
    else if (this.startTimeChoose == "9999") {
      alert("יש לבחור שעה תקינה")
    }
    else if (this.startTimeChoose.length < 1) {
      alert("יש לבחור שעה מהמערכת")

    }
  }



}




