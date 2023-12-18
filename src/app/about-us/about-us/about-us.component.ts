import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  constructor(private meta: Meta) {
    this.meta.updateTag({
      name: 'description',
      content: `A Front-End Developer is a web developer who focuses explicitly on
      coding the front-end (user interface) of a website. Front-End
      Developers design and develop websites and web applications by using
      web technologies such as HTML, CSS, DOM, and JavaScript, that either
      run on the Open Web Platform or function as compilation input for
      non-web platform environments like React Native. , HTML5 , ANGULAR , TAILWIND CSS , BOOTSTRAP ,
      SEO is the practice of improving and promoting a website in order to increase the number of visitors it receives ,
      Simplicity is one of the golden rules of app design. The audience should have an enjoyable, positive experience when using your app. `,
    });
  }
}
