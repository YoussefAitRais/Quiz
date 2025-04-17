import { Routes } from '@angular/router';
import { QuizzComponent } from './quizz/quizz.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo : 'home',
        pathMatch:'full'
    },

    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'category',
        component: CategoryComponent
    },

    {
        path: 'quizz',
        component: QuizzComponent
    }    
];

