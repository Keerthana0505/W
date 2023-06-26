import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  
  constructor(private formBuilder: FormBuilder,private router: Router) {}

  postForm = this.formBuilder.group({
    postDescription: ['', Validators.required],
    poster: ['', [Validators.required,Validators.pattern('^(http|https).*')]],
    
  });
  postList$: any;
  addPost(){

  }

}
