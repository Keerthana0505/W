import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent {

  constructor(private router: Router) {}
  @Input() post = {
    id:'1',
    poster:'',
    postDescription:""
  };
  @Output() delete = new EventEmitter<string>();
  movieList$: any;

  delpost(id: string) {
    this.delete.emit(id);
  }
 
  editpost(id: string) {
    this.router.navigate([`/post/edit/${id}`]);
  }
}
