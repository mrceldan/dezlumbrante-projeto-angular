import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent {}
