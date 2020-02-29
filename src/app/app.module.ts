import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitesComponent } from './pages/sites/sites.component';
import { BlogPostsComponent } from './pages/blog-posts/blog-posts.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    SitesComponent,
    BlogPostsComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
