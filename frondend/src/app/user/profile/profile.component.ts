import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ProfileData} from '../../shared/interfaces/profile-data';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData: ProfileData;

  constructor(private userService: UserService, private title: Title) {
    title.setTitle('Profile');
  }

  ngOnInit(): void {
    this.userService.profile().subscribe(data => {
      this.profileData = data;
    });
  }

}
