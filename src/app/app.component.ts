import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sm-app';

  constructor(public router: Router, public route: ActivatedRoute) {}

  mypost() {
    this.router.navigate([`/postlist`]);
  }
  addpost() {
    this.router.navigate(['/add']);
  }

  gohome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.router.navigate(['/home']);
  }
}
