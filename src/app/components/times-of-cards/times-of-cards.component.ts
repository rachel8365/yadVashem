import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { AvailablePlacesService } from '../../../services/available-places.service';
import { MyEntranceComponent } from '../my-entrance/my-entrance.component';

@Component({
  selector: 'app-times-of-cards',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MyEntranceComponent],
  templateUrl: './times-of-cards.component.html',
  styleUrl: './times-of-cards.component.scss'
})
export class TimesOfCardsComponent implements OnInit {
  entrancesData: any[] = [];
  startTime!: string;
  endTime!: string;
  index = 0
  @Input() NumOfVisitors!: number;
  showHours = false
  constructor(private availablePlacesService: AvailablePlacesService,) {


  }
  ngOnInit(): void {
    this.getCorrectTime(0);
    this.getInformationForOrders();
  }


  changeTime(event: MatTabChangeEvent) {
    this.index = event.index;
    this.getCorrectTime(event.index);
  }


  getCorrectTime(time: number) {
    switch (time) {
      case 0: {
        this.startTime = "8:30"
        this.endTime = "12:00"
        break;
      }
      case 1: {
        this.startTime = "12:00"
        this.endTime = "15:00"
        break;
      }
      case 2: {
        this.startTime = "15:00"
        this.endTime = "15:50"
        break;
      }
    }
  }


  getInformationForOrders(): void {
    this.availablePlacesService.getJsonData().subscribe((res: any) => {
      this.entrancesData = res.entrances;
    })
  }

  enterNumOfVisitors(num: number) {
    if (num > 0)
      this.showHours = true
    else
      this.showHours = false
  }
}
