import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  showNav: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  closeAlart() {
    this.showNav = !this.showNav;
  }
}
