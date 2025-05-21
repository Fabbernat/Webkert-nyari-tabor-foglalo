import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  imports: [],
  template: './notification.component.html',
  styles: '{}'
})
export class NotificationComponent {

}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: Date;
}