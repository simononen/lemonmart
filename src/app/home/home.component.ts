import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayLogin = true;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.displayLogin = !this.authService.isAuthenticated();
  }

}
