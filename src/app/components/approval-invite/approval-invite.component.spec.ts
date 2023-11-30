import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalInviteComponent } from './approval-invite.component';

describe('ApprovalInviteComponent', () => {
  let component: ApprovalInviteComponent;
  let fixture: ComponentFixture<ApprovalInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovalInviteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprovalInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
