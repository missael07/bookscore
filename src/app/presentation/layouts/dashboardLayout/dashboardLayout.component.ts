import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';
import { SideBarMenuItemComponent } from '../../components/sideBarMenuItem/sideBarMenuItem.component';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SideBarMenuItemComponent
  ],
  templateUrl: './dashboardLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
  public routes = routes[0].children?.filter( route => route.data)

  menuService = inject(MenuService);

  displayMenu() {
    this.menuService.hideMenu.set(!this.hideMenu);
  }

  get hideMenu() {
    return this.menuService.hideMenu()
  }

  get displayHeader() {
    return this.menuService.displayHeader()
  }
 }
