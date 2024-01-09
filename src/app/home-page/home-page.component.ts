import { NgFor, isPlatformServer } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  Type,
} from '@angular/core';
import { ContactComponent } from '../contact/contact/contact.component';
import { AboutUsComponent } from '../about-us/about-us/about-us.component';
import { ServiceComponent } from '../services/service/service.component';
import { WorkComponent } from '../work/work/work.component';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, firstValueFrom, retry } from 'rxjs';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ContactComponent,
    AboutUsComponent,
    ServiceComponent,
    WorkComponent,
    NgFor,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements AfterViewInit, OnDestroy {
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

  HeaderHeight = 180;
  subscription!: Subscription;
  constructor(
    @Inject(PLATFORM_ID) id: any,
    private activated: ActivatedRoute,
    private meta: Meta
  ) {
    if (isPlatformServer(id)) {
      return;
    }
    setInterval(() => {
      this.activeImageIndex++;
      if (this.activeImageIndex === this.testimonial.length) {
        this.activeImageIndex = 0;
      }
    }, 4000);
    this.meta.updateTag({
      name: 'description',
      content: `Harsh Rajbhar, Harsh, Rajbhar , Kumar , Harsh Kumar Rajbhar, Web developer , Frontend Developer , Software Developer , Software Engineer, `,
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngAfterViewInit() {
    this.subscription = this.activated.fragment.subscribe((frag: any) => {
      // console.log(frag);
      setTimeout(() => {
        this.scrollToFrag(frag);
      });
    });
  }
  private scrollToFrag(frag: string) {
    if (typeof frag !== 'undefined') {
      firstValueFrom(
        new Observable((obs) => {
          const ele = document.getElementById(frag);
          if (ele === null) {
            obs.error('Error');
          } else {
            obs.next('a');
            const bou = ele.getBoundingClientRect();

            setTimeout(() => {
              document.scrollingElement?.scrollBy(
                bou.x,
                bou.y - this.HeaderHeight / 2
              );
            });

            obs.complete();
          }
        }).pipe(
          retry({
            count: 7,
            delay: 1000,
          })
        )
      );
    }
  }

  previousindex() {
    if (this.activeImageIndex > 0) {
      this.activeImageIndex--;
      if (this.activeImageIndex === this.testimonial.length) {
        this.activeImageIndex = 0;
      }
    }
  }
  nextindex() {
    this.activeImageIndex++;
    if (this.activeImageIndex === this.testimonial.length) {
      this.activeImageIndex = 0;
    }
  }
}
