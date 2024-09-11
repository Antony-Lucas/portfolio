import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './topnav.component.html',
  styleUrls: [
    './topnav.component.css',
    '../../styles/hamburguer/menu.hamburguer.css',
  ],
})
export class TopnavComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  ngOnInit() {}
}
