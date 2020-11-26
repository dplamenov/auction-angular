import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ProfileData} from '../../shared/interfaces/profile-data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData: ProfileData;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.profile().subscribe(data => {
      this.profileData = data;
    });
  }

}
