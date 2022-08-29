import { isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Type } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  activeImageIndex = 0;

  testimonial: any[] = [
    {
      name: 'Rutvij Dasadiya',
      post: 'CEO at Hello Skate Mobility',
      info: `
      During Harsh’s time with us, I interacted frequently with him
      and depended on him. He is goal-oriented as well as a team
      player, Harsh was always easy-going.
    `,
      img: '/assets/images/home_page/testemonial/Rutvij-Dasadia-photo.png',
    },
    {
      name: 'Keyur Shah',
      post: 'Founder of R P Softech',
      info: `Harsh is smart, very hard-working, energetic, a joy to have in
      the office, very devoted, and committed a good team player.`,
      img: '/assets/images/home_page/testemonial/keyurshah.png',
    },
  ];

  constructor(@Inject(PLATFORM_ID) id: any) {
    if (isPlatformServer(id)) {
      return;
    }
    setInterval(() => {
      this.activeImageIndex++;
      if (this.activeImageIndex === this.testimonial.length) {
        this.activeImageIndex = 0;
      }
    }, 4000);
  }
}
