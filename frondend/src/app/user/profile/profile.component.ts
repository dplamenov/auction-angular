import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ProfileData} from '../../shared/interfaces/profile-data';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData: ProfileData;

  constructor(private userService: UserService, private title: Title, private route: ActivatedRoute) {
    title.setTitle('Profile');
  }

  ngOnInit(): void {
    const {userId = null} = this.route.snapshot.params;
    this.userService.profile(userId).subscribe(data => {
      this.profileData = data;
    });
  }

}
