import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { StackComponent } from '../stack/stack.component';
import { ExperienceComponent } from '../experience/experience.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AcademyComponent } from '../academy/academy.component';
import { AboutComponent } from '../about/about.component';
import { DividerModule } from 'primeng/divider';

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
    DividerModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../styles/topnav/topnav.css',
    '../../styles/footer/footer.css',
    '../../styles/hamburguer/menu.hamburguer.css',
  ],
})
export class HomeComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(position: number, multiplicator: number, elementId: string) {
    this.isMenuOpen = false;
    const element = document.getElementById(elementId);
    const offset = position * multiplicator;

    if (element) {
      let offsetPosition = 0;

      if (position !== 0 || multiplicator !== 0) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        offsetPosition = elementPosition - offset;
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
