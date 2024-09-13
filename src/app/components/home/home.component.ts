import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { StackComponent } from '../stack/stack.component';
import { ExperienceComponent } from '../experience/experience.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AcademyComponent } from '../academy/academy.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    StackComponent,
    ProjectsComponent,
    ExperienceComponent,
    AcademyComponent,
    AboutComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../styles/topnav/topnav.css',
    '../../styles/hamburguer/menu.hamburguer.css',
  ],
})
export class HomeComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToTechStack() {
    const element = document.getElementById('stack');
    const offset = 5 * 16;
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
