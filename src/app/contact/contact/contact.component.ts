import { Component } from '@angular/core';
import {
  JSONObjectKeyAndTypeValidator,
  ValidateJSONObject,
} from 'rps-jsonvalidator';

// const nodemailer = require('nodemailer');
// import * as nodemailer from 'nodemailer'

interface contactUsInterface {
  your_name: string;
  your_email: string;
  your_no: string;
  your_msg: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  error = '';

  // getdata() {
  //
  // }

  contact_us_details: contactUsInterface = {
    your_name: '',
    your_email: '',
    your_no: '',
    your_msg: '',
  };
  ContactValidatorObj: JSONObjectKeyAndTypeValidator[] = [
    {
      key: 'your_name',
      required: true,
      type: 'string',
      regex: /^[a-zA-Z ]+$/,
      error: '* Enter Your name',
      lengths: {
        min_len: 1,
      },
    },
    {
      key: 'your_email',
      required: true,
      type: 'string',
      regex: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
      error: '* Enter valid email',
    },
    {
      key: 'your_no',
      required: true,
      type: 'string',
      error: '* Enter valid phone number',
      regex: /^[a-zA-Z0-9+_.-]+$/,
      lengths: {
        len: 10,
      },
    },

    {
      key: 'your_msg',
      required: true,
      type: 'string',
      lengths: {
        min_len: 1,
      },
      error: '* Enter Message',
    },
  ];

  getdata() {
    try {
      ValidateJSONObject(this.contact_us_details, this.ContactValidatorObj);
      console.log(this.contact_us_details);
      // this.emailmethod();
      this.error = '';
    } catch (error: any) {
      this.error = error;
    }
  }
  // emailmethod() {
  //   let mailTransporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     auth: {
  //       user: 'rajbharharsh403@gmail.com',
  //       pass: '8866128435Harsh',
  //     },
  //   });

    // let details = {
    //   from: this.contact_us_details.your_email,
    //   to: 'rajbharharsh403@gmail.com',
    //   subject: 'testing porpose',
    //   text: 'test our page',
    // };

  //   mailTransporter.sendMail(details, (err: any) => {
  //     if (err) {
  //       console.log('error');
  //     } else {
  //       console.log('sent');
  //     }
  //   });
  // }
}
