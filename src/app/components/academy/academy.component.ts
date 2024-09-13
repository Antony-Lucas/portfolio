import { Component } from '@angular/core';
import { academy } from './academy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-academy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './academy.component.html',
  styleUrl: './academy.component.css',
})
export class AcademyComponent {
  academy: any = academy;
}
