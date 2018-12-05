import { MainComponent } from './main/main.component';
import { ArticleComponent } from './article/article.component';

import { Routes } from "@angular/router";


export const routes: Routes = [

    {
        path: '', component: MainComponent
    },
    {
        path: 'article', component: ArticleComponent
    }
];
