import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { EntrancesOrdersComponentComponent } from './components/entrances-orders.component/entrances-orders.component.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AvailablePlacesService } from '../services/available-places.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EntrancesOrdersComponentComponent, HttpClientModule, NavbarComponent],


  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'yadVashem';

  constructor(public availablePlacesService: AvailablePlacesService, private router: Router,) {
  }
  ngOnInit(): void {
    this.router.navigate(['entrances-orders']);
  }

}
