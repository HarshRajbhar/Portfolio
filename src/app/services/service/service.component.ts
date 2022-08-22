import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
  servicearray: any[] = [
    {
      img: '/assets/images/service/web_development.svg',
      title: 'Frontend Development',
      info: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Accusantium, porro.`,
    },
    {
      img: '/assets/images/service/website-design.svg',
      title: 'Web Developer',
      info: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Accusantium, porro.`,
    },
    {
      img: '/assets/images/service/Responsive-Design.svg',
      title: 'Responsive Design',
      info: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Accusantium, porro.`,
    },
  ];
}
