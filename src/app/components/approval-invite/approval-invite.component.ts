import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-approval-invite',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './approval-invite.component.html',
  styleUrl: './approval-invite.component.scss'
})
export class ApprovalInviteComponent implements OnInit {

  numOfVisitors!: number;
  time: any;
  constructor(private route: ActivatedRoute,
  ) {


  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.numOfVisitors = params['numOfVisitors'];
      this.time = params['time'];
    })
  }



}
