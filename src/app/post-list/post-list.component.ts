import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  postList=[
    {id:'2',
    poster:'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
    postDescription:'One touch of nature makes the whole world kin'},
    {id:'3',
    poster:'https://purepng.com/public/uploads/large/purepng.com-tom-and-jerry-happytom-and-jerrytomjerryanimated-seriesin-1940characters-1701528659229lrdcn.png',
    postDescription:'Never willing to accept defeat'},
    {id:'4',
    poster:'https://t3.ftcdn.net/jpg/02/43/31/64/360_F_243316414_0TS5HktGmnhnMUpvWrwSAneOB8cmIip8.jpg',
    postDescription:'The Moon was so beautiful that the ocean held up a mirror.'},
  ]
}
