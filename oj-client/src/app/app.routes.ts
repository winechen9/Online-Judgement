import { Routes, RouterModule } from '@angular/router';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import {ErrorPageComponent} from './components/error-page/error-page.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'problems',
        component: ProblemListComponent
    },
    {
        path: 'problems/:id',
        component: ProblemDetailComponent
    },

    {
        path: 'callback',
        redirectTo: 'problems'
    },
    {
        path: '**',
        redirectTo: 'errorPage'
    },
    {
        path: 'problems/**',
        redirectTo: 'errorPage'
    },
    {
        path: 'errorPage',
        component: ErrorPageComponent
    }
    
];

export const routing = RouterModule.forRoot(routes);
