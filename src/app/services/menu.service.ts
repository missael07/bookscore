import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public hideMenu = signal(true);
  public displayHeader = signal(true);

}
