import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailablePlacesService } from '../../../services/available-places.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { TimesOfCardsComponent } from '../times-of-cards/times-of-cards.component';

@Component({
  selector: 'app-entrances-orders', //.components
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatButtonModule, FormsModule, ReactiveFormsModule,
    MatRippleModule, MatFormFieldModule, MatInputModule, TimesOfCardsComponent],
  templateUrl: './entrances-orders.component.component.html',
  styleUrl: './entrances-orders.component.component.scss'
})
export class EntrancesOrdersComponentComponent implements OnInit {
  formData!: FormGroup;
  @ViewChild(TimesOfCardsComponent) timesOfCardsComponent!: TimesOfCardsComponent;


  constructor(
    private fb: FormBuilder) {
    this.formData = this.fb.group({
      NumOfVisitors: new FormControl(0, [Validators.required]),
      TheDateToday: new FormControl(Date()),
      AvailableCrads: new FormControl(0),
      TimeToday: new FormControl(""),
      TimeChoose: new FormControl(),

    });
  }

  ngOnInit(): void {
  }
  calculateAvailablePlaces() {
    if (this.formData.value.NumOfVisitors > 0)
      this.timesOfCardsComponent.enterNumOfVisitors(1)
    else {
      this.timesOfCardsComponent.enterNumOfVisitors(0)
      alert("יש להכניס את מספר המבקרים")
    }
  }
}
