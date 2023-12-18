import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface porfolio {
  img: string;
  title: string;
  url: string;
  type: string;
  work: string;
  date: string;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  portfolio: porfolio[] = [
    {
      img: '/assets/images/work/tannus-logo.svg',
      title: 'Tannus',
      url: `https://tannus.jp/`,
      type: 'Web App',
      work: 'Web App made by me',
      date: '1 Jan. 2023',
    },
    {
      img: '/assets/images/work/fill_in.svg',
      title: 'Fill In',
      url: ``,
      type: 'Mobile App ',
      work: 'Designed By me',
      date: '10 Nov. 2022',
    },
    {
      img: '/assets/images/work/Search_attributes.png',
      title: 'SearchAttributes',
      type: 'Web App',
      url: `https://search-attributes.web.app/`,
      work: 'Whole Web App made by me',
      date: '29 Aug. 2022',
    },
    {
      img: '/assets/images/work/shiv_bullion.png',
      title: 'Shiv Bullion',
      type: 'Bullion software and mobile App',
      url: `https://shivbullion.in/`,
      work: 'Frontend Side Work done by me',
      date: '10 june. 2021',
    },
    {
      img: '/assets/images/work/aangee.jpg',
      title: 'Aangee',
      type: 'Web App',
      url: `https://rpsaangee.web.app/`,
      work: 'Whole Web App made by me',
      date: '10 Apr. 2022',
    },
  ];
}
