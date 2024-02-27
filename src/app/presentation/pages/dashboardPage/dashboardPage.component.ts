import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dashboardPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent { }
