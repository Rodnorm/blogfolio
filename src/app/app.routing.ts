import { MainComponent } from './main/main.component';
import { ArticleComponent } from './article/article.component';

import { Routes } from "@angular/router";


export const routes: Routes = [

    {
        path: '', component: MainComponent, pathMatch: 'full'
    },
    {
        path: 'article', component: ArticleComponent
    }
];
