import { MainComponent } from './main/main.component';
import { ArticleComponent } from './article/article.component';

import { Routes } from "@angular/router";


export const routes: Routes = [
    {
        path: 'blogfolio', component: MainComponent, pathMatch : 'prefix'
    },
    {
        path: '', component: MainComponent, pathMatch : 'prefix'
    },
    {
        path: 'article', component: ArticleComponent
    }
];


