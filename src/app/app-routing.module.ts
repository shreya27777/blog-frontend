import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AddPostComponent} from './add-post/add-post.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {NewsFeedComponent} from './news-feed/news-feed.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {MyPostsComponent} from './my-posts/my-posts.component';
import {EditPostComponent} from './edit-post/edit-post.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'addPost', component: AddPostComponent},
  {path: 'myProfile', component: MyProfileComponent},
  {path: 'newsFeed', component: NewsFeedComponent},
  {path: 'post-details/:id', component: PostDetailsComponent},
  {path: 'my-posts' , component: MyPostsComponent},
  {path: 'edit-post/:id' , component: EditPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const RoutingComponents = [LoginComponent, SignupComponent, HomeComponent, AddPostComponent, MyProfileComponent,
  NewsFeedComponent, PostDetailsComponent , MyPostsComponent , EditPostComponent
];
