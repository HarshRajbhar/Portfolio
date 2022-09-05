import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  portfolio: any[] = [
    {
      img: '/assets/images/work/fill_in.svg',
      title: 'Fill In',
      url: ``,
      type: 'Mobile App ',
      work: 'Designed By me',
      date: '10 Nov. 2021',
    },
    {
      img: '/assets/images/work/aangee.jpg',
      title: 'Aangee',
      type: 'Web App',
      url: `https://rpsaangee.web.app/`,
      work: 'Web App made by me',
      date: '10 Apr. 2022',
    },
    {
      img: '/assets/images/work/Search_attributes.png',
      title: 'SearchAttributes',
      type: 'Web App',
      url: `https://search-attributes.web.app/`,
      work: 'Web App made by me',
      date: '29 Aug. 2022',
    },
    {
      img: '/assets/images/work/shiv_bullion.png',
      title: 'Shiv Bullion',
      type: 'Bullion software and mobile App',
      url: `https://shivbullion.in/`,
      work: 'Web App made by me',
      date: '10 Nov. 2021',
    },
  ];
}
