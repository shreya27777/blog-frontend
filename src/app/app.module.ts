import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule, RoutingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddPostComponent } from './add-post/add-post.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';

import { PostDetailsComponent } from './post-details/post-details.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AddPostComponent,
    MyProfileComponent,
    NewsFeedComponent,
    PostDetailsComponent,
    MyPostsComponent,
    EditPostComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
