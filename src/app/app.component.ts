import { Component } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notAccount';
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
    },
    {
      title: 'Maybe reports ?',
      children: [
        {
          title: 'hehe',
        },
      ],
    },
    {
      title: 'configure something',
      children: [
        {
          title: 'hehe',
        },
      ],
    },
    {
      title: 'configure more',
      children: [
        {
          title: 'hehe',
        },
      ],
    },
    {
      title: 'some data',
      children: [
        {
          title: 'hehe',
        },
      ],
    },
    {
      title: 'Logout',
    },
  ];
}
