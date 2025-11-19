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

  active: 'buy' | 'search' | 'cart' | null = null;

  openPopup(type: 'buy' | 'search' | 'cart') {
    this.active = type;
  }

  closePopup() {
    this.active = null;
  }

  @HostListener('window:keydown.escape')
  onEsc() {
    this.closePopup();
  }
}
