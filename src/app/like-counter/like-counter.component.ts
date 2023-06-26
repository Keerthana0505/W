import { Component } from '@angular/core';

@Component({
  selector: 'app-like-counter',
  templateUrl: './like-counter.component.html',
  styleUrls: ['./like-counter.component.css']
})
export class LikeCounterComponent {
  like: number = 0;
  disLike: number = 0;

  increment() {
    
    this.like++;
  }

  decrement() {
    
    this.disLike++;
  }
}
