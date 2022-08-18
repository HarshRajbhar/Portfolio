import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  activeindex = 0;
  isHamActive = false;
  navlist: any[] = [
    {
      name: 'Home',
      url: '',
      index: 0,
    },
    {
      name: 'About',
      url: 'about',
      index: 1,
    },
    {
      name: 'Service',
      url: 'service',
      index: 2,
    },
    {
      name: 'Work',
      url: 'work',
      index: 3,
    },
    {
      name: 'Contact',
      url: 'contact',
      index: 4,
    },
  ];
}
