import { MainComponent } from './main/main.component';
import { ArticleComponent } from './article/article.component';

import { Routes } from "@angular/router";


export const routes: Routes = [

    {
        path: '', component: MainComponent, pathMatch : 'prefix'
    },
    {
        path: 'article', component: ArticleComponent
    }
];


