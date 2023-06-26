import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  constructor(
    private fb: FormBuilder){}
    postForm = this.fb.group({
      id:'',
      postDescription: ['', Validators.required],
      poster: ['',[ Validators.required,Validators.pattern('^(http|https).*')]]
    });
    editPost(){

    }

}
