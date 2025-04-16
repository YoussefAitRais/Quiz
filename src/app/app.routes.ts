import { Routes } from '@angular/router';
import { QuizzComponent } from './quizz/quizz.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo : 'home',
        pathMatch:'full'
    },

    {
        path: 'quizz',
        component: QuizzComponent
    },

    {
        path: 'home',
        component: HomeComponent
    }




];

