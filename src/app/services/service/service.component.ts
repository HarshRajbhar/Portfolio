import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone:true,
  imports:[NgFor],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
  servicearray: any[] = [
    {
      img: '/assets/images/service/website-design.svg',
      title: 'Web Developer',
      info: `The web development process involves taking the graphical elements defined in the design process and coding them into a custom theme.`,
    },
    {
      img: '/assets/images/service/Responsive-Design.svg',
      title: 'Responsive Design',
      info: `Having a responsive layout means that your website fluidly resizes for optimal viewing regardless of the screen size or device (e.g. iPhone, iPad).`,
    },
    {
      img: '../../../assets/images/service/web-icon-3.png',
      title: 'Website Design',
      info: `Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.`,
    },
    {
      img: '../../../assets/images/service/SEO-Optimization-Illustration.jpg',
      title: 'SEO (Search Engine Optimisation)',
      info: `SEO is the practice of improving and promoting a website in order to increase the number of visitors it receives.`,
    },
    {
      img: '../../../assets/images/service/mobile-app-development.jpg',
      title: 'App Design',
      info: `Simplicity is one of the golden rules of app design. The audience should have an enjoyable, positive experience when using your app.`,
    },
  ];
}
