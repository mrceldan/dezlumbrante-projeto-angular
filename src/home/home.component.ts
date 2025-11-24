import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  active: 'buy' | 'cart' | null = null;
  category: 'boca' | 'olhos' | 'pele' | null = null;

  openPopup(type: 'buy' | 'cart') {
    this.active = type;
    this.category = null;
  }

  openCategory(cat: 'boca' | 'olhos' | 'pele') {
    this.category = cat;
  }

  closePopup() {
    this.active = null;
    this.category = null;
  }

  @HostListener('window:keydown.escape')
  onEsc() {
    this.closePopup();
  }
}
