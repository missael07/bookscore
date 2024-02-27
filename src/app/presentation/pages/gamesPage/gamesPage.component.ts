import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-games-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './gamesPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GamesPageComponent { 
  menuService = inject(MenuService);


  hideMenu(){
    this.menuService.displayHeader.set(false);
    this.menuService.hideMenu.set(true)
  }
}
