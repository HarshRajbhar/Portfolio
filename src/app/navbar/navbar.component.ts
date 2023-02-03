import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports:[NgFor,RouterLink,RouterLinkActive,NgClass,NgIf],
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
      url: '/',
      fragment:'about-us',
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
