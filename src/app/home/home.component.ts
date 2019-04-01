import { Component, OnInit } from '@angular/core';
import {  ProfileService } from './../profile.service';
import { Users } from '../users';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProfileService]
})
export class HomeComponent implements OnInit {
  user: Users;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }
}
