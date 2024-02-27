import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-create-game-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './createGamePage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreateGamePageComponent { 

  menuService = inject(MenuService);

  displayMenu() {
    this.menuService.hideMenu.set(false)
  }

}
