import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

// import * as JsonToXML from 'js2xmlparser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
// data = {
//   Users: [
//     {
//       type: 'teacher',
//       id: 0,
//       name: 'TEACHER ONE',
//       login: 'tone',
//       password: 'd450c5dbcc10db0749277efc32f15f9f',
//     },
//     {
//       type: 'student',
//       id: 1,
//       name: 'STUDENT ONE',
//       login: 'sone',
//       password: 'ec80dcc5a3eab73a4f128b66c1e4b92a',
//     },
//     {
//       type: 'student',
//       id: 2,
//       name: 'STUDENT TWO',
//       login: 'stwo',
//       password: '62e73bf0deb1871860702b064106f1dc',
//     },
//   ],
// };

// xmlData = JsonToXML.parse('person', this.data);
// }

// https://material.angular.io/cdk/drag-drop/overview
