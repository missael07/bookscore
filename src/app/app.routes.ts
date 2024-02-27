import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './presentation/layouts/dashboardLayout/dashboardLayout.component';


export const routes: Routes = [
    {
        path: '',
        component: DashboardLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./presentation/pages/dashboardPage/dashboardPage.component'),
                data: {
                    icon: 'fa-solid fa-gauge',
                    title: 'Dashboard',
                    description: 'Dashboard',
                  },
            },
            {
                path: 'games',
                loadComponent: () => import('./presentation/pages/gamesPage/gamesPage.component'),
                data: {
                    icon: 'fa-solid fa-baseball',
                    title: 'Juegos',
                    description: 'Juegos',
                  },
            },
            {
                path: 'create-game',
                loadComponent: () => import('./presentation/pages/createGamePage/createGamePage.component')
            },
            {
              path: '**',
              redirectTo: 'dashboard',
              pathMatch: 'full',
            },
        ]
    }

];
