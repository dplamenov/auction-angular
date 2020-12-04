import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // showTerms: boolean = false;
  //
  // @HostListener('window:scroll') onScroll() {
  //   this.showTerms = (window.innerHeight + window.scrollY) >= document.body.scrollHeight;
  // }

  constructor() {
  }

  ngOnInit(): void {

  }

}
