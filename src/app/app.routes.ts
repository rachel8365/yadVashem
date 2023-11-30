import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApprovalInviteComponent } from './components/approval-invite/approval-invite.component';
import { EntrancesOrdersComponentComponent } from './components/entrances-orders.component/entrances-orders.component.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'entrances-orders', component: EntrancesOrdersComponentComponent },
    { path: 'approval-invite', component: ApprovalInviteComponent }
];



