import { ArticleComponent } from './article/article.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CollapseModule } from  'ngx-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { ArticlesListComponent } from './articlesList/articles.list.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ArticlesListComponent,
    ArticleComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
