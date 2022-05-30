import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  status = false;

  constructor() { }

  ngOnInit(): void {
  }
  clickEvent(): any {
    this.status = !this.status;
  }

}
