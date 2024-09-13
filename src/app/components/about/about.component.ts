import { Component } from '@angular/core';
import { about, hobbies } from './about';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  about: any = about;
  hobbies: any = hobbies;
}
