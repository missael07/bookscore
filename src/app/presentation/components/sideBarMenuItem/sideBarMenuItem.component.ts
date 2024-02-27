import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ], template: `
  <a
    [routerLink]="path"
    routerLinkActive="bg-gray-800 text-white"
    class="flex justify-center items-center hover:bg-gray-800 hover: sm:rounded-md p2 transition-colors"
  >
    <i class="{{ icon }} text-2xl mr-4"></i>
    <div class="flex flex-col flex-grow">
      <span class="text-lg font-semibold">{{ title }}</span>
      <span class="text-gray-400 text-sm">{{ description }}</span>
    </div>
</a>
`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarMenuItemComponent { 
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) path!: string;
}
