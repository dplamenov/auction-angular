import {Component, OnInit} from '@angular/core';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like-icon',
  templateUrl: './like-icon.component.html',
  styleUrls: ['./like-icon.component.css']
})
export class LikeIconComponent implements OnInit {
  faThumbsUp = faThumbsUp;

  constructor() {
  }

  ngOnInit(): void {
  }

}
