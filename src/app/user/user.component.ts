import {  ProfileService } from './../profile.service';
import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ProfileService]
})
export class UserComponent implements OnInit {
  user: Users;
  userRepos: any;
  userName: string;

  constructor(private profileService: ProfileService) {
  }
 findProfile() {

   this.profileService.updateProfile(this.userName);

   this.profileService.getUserInfo();
   this.user = this.profileService.user;
   console.log(this.user);

   this.profileService.getRepoInfo(this.userName);
   this.userRepos = this.profileService.newRepo;
 }

  ngOnInit() {

    this.profileService.getRepoInfo(this.userName);
    this.profileService.getUserInfo();
    this.user = this.profileService.user;
     // console.log(this.profileService.repo.name);
  }

}
