import {  ProfileService } from './../profile.service';
import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ProfileService]
})
export class UserComponent implements OnInit {
  [x: string]: any;
  user: Users;
  userRepos: any;
  userName: string;

  constructor(private route: ActivatedRoute, private profileService: ProfileService, private router: Router) {
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
    const id = this.route.snapshot.paramMap.get('id');
    this.user = this.service.getUser(id);
    this.profileService.getRepoInfo(this.userName);
    this.profileService.getUserInfo();
    this.user = this.profileService.user;
     // console.log(this.profileService.repo.name);
  }

}
