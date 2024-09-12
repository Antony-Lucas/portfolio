import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { StackComponent } from '../stack/stack.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StackComponent, ProjectsComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  scrollToXp() {
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
