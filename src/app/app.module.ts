import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './edit-post/edit-post.component';
import { LikeCounterComponent } from './like-counter/like-counter.component';


const routes: Routes = [
  
  { path: 'postlist', component: PostListComponent },
  {path:'post',component:ViewPostComponent},
  {path:'add',component:AddPostComponent},
  {path:'home',component:AppComponent},
  { path: 'post/edit/:id', component: EditPostComponent }
];
// { path: 'post/edit/:id', component: EditBookComponent },
@NgModule({

  declarations: [
    AppComponent,
    AddPostComponent,
    ViewPostComponent,
    PostListComponent,
    EditPostComponent,
    LikeCounterComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),
    AppRoutingModule,MatButtonModule,MatFormFieldModule,MatIconModule,MatInputModule,FormsModule,
    ReactiveFormsModule,MatToolbarModule,MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
